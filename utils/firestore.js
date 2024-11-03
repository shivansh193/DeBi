// lib/firebase/firestore.js
import { getFirestore, collection, addDoc, getDocs, query, where, getDoc,doc } from "firebase/firestore";
import app from "./initFirebase";

const db = getFirestore(app);

export async function saveToken(tokenData) {
  try {
    const sanitizedData = {
        ...tokenData,
        createdAt: tokenData.createdAt.toString(),
        updatedAt: tokenData.updatedAt.toString(),
      };
  
      const docRef = await addDoc(collection(db, 'tokens'), sanitizedData);
      console.log("Token saved successfully with ID:", docRef.id);
      return docRef.id;
  } catch (e) {
    console.error("Error saving task:", e);
    throw e;
  }
}

export async function getTokenDetails() {
  try {
    const q = query(collection(db, 'tokens'));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error("Error getting tasks:", e);
    throw e;
  }
}
export async function updateTokenDetails(tokenId, updatedData) {
    try {
      const tokenDocRef = doc(db, 'tokens', tokenId);
      await updateDoc(tokenDocRef, updatedData);
      console.log("Token updated successfully");
    } catch (e) {
      console.error("Error updating token:", e);
      throw e;
    }
  }

  export async function deleteToken(tokenId) {
    try {
      await deleteDoc(doc(db, 'tokens', tokenId));
      console.log("Token deleted successfully");
    } catch (e) {
      console.error("Error deleting token:", e);
      throw e;
    }
  }
  export async function getTokensByCondition(field, condition, value) {
    try {
      const q = query(collection(db, 'tokens'), where(field, condition, value));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.error("Error querying tokens:", e);
      throw e;
    }
  }
  export async function getTokenById(tokenId) {
    try {
      const tokenDocRef = doc(db, 'tokens', tokenId);
      const tokenDoc = await getDoc(tokenDocRef);
      if (tokenDoc.exists()) {
        return { id: tokenDoc.id, ...tokenDoc.data() };
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (e) {
      console.error("Error getting token:", e);
      throw e;
    }
  }

  export async function getBoughtTokensByUser(walletAddress) {
    try {
      const q = query(collection(db, 'tokens'), where('ownerWalletAddress', '==', walletAddress));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.error("Error checking bought tokens:", e);
      throw e;
    }
  }
  export async function getAvailableTokens() {
    try {
      const q = query(collection(db, 'tokens'), where('status', '==', 'available'));
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (e) {
      console.error("Error getting available tokens:", e);
      throw e;
    }
  }
  export async function getTotalTokensOwnedByUser(walletAddress) {
    try {
      const boughtTokens = await getBoughtTokensByUser(walletAddress);
      return boughtTokens.length;
    } catch (e) {
      console.error("Error getting total tokens owned by user:", e);
      throw e;
    }
  }