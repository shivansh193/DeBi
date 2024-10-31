// lib/contractUtils.js
import { ethers } from "ethers";
import { abiToken, DEBI_TOKEN_ADDRESS } from "./contracts";

let provider;
let tokenContract;

// Initialize provider and contract only on client side
if (typeof window !== 'undefined') {
  provider = new ethers.providers.JsonRpcProvider("https://multi-special-river.ethereum-holesky.quiknode.pro/7cd4fd3e455fb885b18ca70c3df77de484fa5248");
  tokenContract = new ethers.Contract(DEBI_TOKEN_ADDRESS, abiToken, provider);
}

// Get contract details
export async function getTokenDetails() {
  try {
    const [price, maxSupply, mintingEnabled, totalSupply] = await Promise.all([
      tokenContract.price(),
      tokenContract.maxSupply(),
      tokenContract.mintingEnabled(),
      tokenContract.totalSupply()
    ]);

    return {
      price: ethers.utils.formatEther(price),
      maxSupply: maxSupply.toString(),
      mintingEnabled,
      totalSupply: totalSupply.toString()
    };
  } catch (error) {
    console.error('Error fetching token details:', error);
    throw error;
  }
}

// Mint tokens
export async function mintTokens(amount) {
  try {
    if (!tokenContract) {
      throw new Error('Contract not initialized');
    }

    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const contractWithSigner = tokenContract.connect(signer);
    
    // Get current price
    const price = await contractWithSigner.price();
    const totalPrice = price.mul(amount);

    // Execute mint transaction
    const tx = await contractWithSigner.mint(amount, { value: totalPrice });
    return tx;
  } catch (error) {
    console.error('Error minting tokens:', error);
    throw error;
  }
}

// For owner functions
export async function isContractOwner(address) {
  try {
    const owner = await tokenContract.owner();
    return owner.toLowerCase() === address.toLowerCase();
  } catch (error) {
    console.error('Error checking owner:', error);
    throw error;
  }
}

export async function setTokenPrice(newPrice) {
  try {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const contractWithSigner = tokenContract.connect(signer);
    const tx = await contractWithSigner.setPrice(ethers.utils.parseEther(newPrice));
    return tx;
  } catch (error) {
    console.error('Error setting price:', error);
    throw error;
  }
}

export async function toggleMinting() {
  try {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const contractWithSigner = tokenContract.connect(signer);
    const tx = await contractWithSigner.toggleMinting();
    return tx;
  } catch (error) {
    console.error('Error toggling minting:', error);
    throw error;
  }
}

export async function ownerMint(toAddress, amount) {
  try {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const contractWithSigner = tokenContract.connect(signer);
    const tx = await contractWithSigner.ownerMint(toAddress, amount);
    return tx;
  } catch (error) {
    console.error('Error in owner mint:', error);
    throw error;
  }
}

export async function withdrawFunds() {
  try {
    const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
    const contractWithSigner = tokenContract.connect(signer);
    const tx = await contractWithSigner.withdraw();
    return tx;
  } catch (error) {
    console.error('Error withdrawing funds:', error);
    throw error;
  }
}

// Connect wallet - your existing function
export async function connectWallet() {
  if (typeof window === 'undefined') {
    throw new Error('This function can only be called in the browser');
  }

  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      return accounts[0];
    } catch (error) {
      console.error('Error connecting wallet:', error);
      throw error;
    }
  } else {
    throw new Error("Please install a Web3 wallet, like MetaMask.");
  }
}