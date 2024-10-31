const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();
  const balance = await deployer.provider.getBalance(deployer.address);
  
  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balance:", ethers.utils.formatEther(balance));
  console.log("Network:", network.name);


  // Deploy NFT Contract
  const DeBiNFT = await hre.ethers.getContractFactory("DeBiNFT");
  
  const nftParams = {
    initialPrice: hre.ethers.utils.parseEther("0.1"), // 0.1 ETH
    baseURI: "blue-random-vole-611.mypinata.cloud",
    maxSupply: 10000,
    initialOwner: deployer.address
  };

  const debiNFT = await DeBiNFT.deploy(
    nftParams.initialPrice,
    nftParams.baseURI,
    nftParams.maxSupply,
    nftParams.initialOwner
  );

  await debiNFT.deployed();
  console.log("DeBiNFT deployed to:", debiNFT.address);

  // Deploy Token Contract
  const DeBiToken = await hre.ethers.getContractFactory("DeBiToken");
  
  const tokenParams = {
    name: "DeBi Token",
    symbol: "DEBI",
    initialPrice: hre.ethers.utils.parseEther("0.001"), // 0.001 ETH
    maxSupply: hre.ethers.utils.parseEther("1000000"), // 1 million tokens
    initialOwner: deployer.address
  };

  const debiToken = await DeBiToken.deploy(
    tokenParams.name,
    tokenParams.symbol,
    tokenParams.initialPrice,
    tokenParams.maxSupply,
    tokenParams.initialOwner
  );

  await debiToken.deployed();
  console.log("DeBiToken deployed to:", debiToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });