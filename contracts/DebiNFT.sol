// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract DeBiNFT is ERC721URIStorage, Ownable {
    using Strings for uint256;

    uint256 public price; // Price for minting the NFT
    string public baseURI; // Base URI for metadata
    uint256 private nextTokenId; // Counter for the next token ID
    uint256 public maxSupply; // Maximum number of NFTs that can be minted
    bool public mintingEnabled; // Flag to control minting status
    
    event PriceUpdated(uint256 newPrice);
    event BaseURIUpdated(string newBaseURI);
    event MintingStatusChanged(bool enabled);

    constructor(
        uint256 initialPrice, 
        string memory _baseURI,
        uint256 _maxSupply,
        address initialOwner
    ) 
        ERC721("DeBiNFT", "DBNFT")
        Ownable(initialOwner) 
    {
        require(initialPrice > 0, "Price must be greater than 0");
        require(bytes(_baseURI).length > 0, "Base URI cannot be empty");
        require(_maxSupply > 0, "Max supply must be greater than 0");
        
        price = initialPrice;
        baseURI = _baseURI;
        maxSupply = _maxSupply;
        nextTokenId = 1;
        mintingEnabled = true;
    }

    // Function to mint a new NFT
    function mint(address to) external payable {
        require(mintingEnabled, "Minting is currently disabled");
        require(msg.value >= price, "Insufficient funds to mint NFT");
        require(nextTokenId <= maxSupply, "Max supply reached");
        require(to != address(0), "Cannot mint to zero address");

        uint256 tokenId = nextTokenId;
        nextTokenId++;
        _safeMint(to, tokenId);
        
        // Set the token URI using the baseURI and tokenId
        string memory tokenURI_ = string(abi.encodePacked(baseURI, tokenId.toString()));
        _setTokenURI(tokenId, tokenURI_);
    }

    // Function to update the price
    function setPrice(uint256 newPrice) external onlyOwner {
        require(newPrice > 0, "Price must be greater than 0");
        price = newPrice;
        emit PriceUpdated(newPrice);
    }

    // Function to update the base URI
    function setBaseURI(string memory newBaseURI) external onlyOwner {
        require(bytes(newBaseURI).length > 0, "Base URI cannot be empty");
        baseURI = newBaseURI;
        emit BaseURIUpdated(newBaseURI);
    }

    // Function to toggle minting status
    function toggleMinting() external onlyOwner {
        mintingEnabled = !mintingEnabled;
        emit MintingStatusChanged(mintingEnabled);
    }

    // Function to withdraw funds from the contract
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}