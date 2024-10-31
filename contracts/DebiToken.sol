// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract DeBiToken is ERC20, Ownable {
    uint256 public price;
    uint256 public maxSupply;
    bool public mintingEnabled;
    
    event PriceUpdated(uint256 newPrice);
    event MintingStatusChanged(bool enabled);

    constructor(
        string memory name, 
        string memory symbol, 
        uint256 initialPrice,
        uint256 _maxSupply,
        address initialOwner
    ) 
        ERC20(name, symbol)
        Ownable(initialOwner)
    {
        require(initialPrice > 0, "Price must be greater than 0");
        require(_maxSupply > 0, "Max supply must be greater than 0");
        
        price = initialPrice;
        maxSupply = _maxSupply;
        mintingEnabled = true;
    }

    // Function to set a new price
    function setPrice(uint256 newPrice) external onlyOwner {
        require(newPrice > 0, "Price must be greater than 0");
        price = newPrice;
        emit PriceUpdated(newPrice);
    }

    // Function to toggle minting status
    function toggleMinting() external onlyOwner {
        mintingEnabled = !mintingEnabled;
        emit MintingStatusChanged(mintingEnabled);
    }

    // Public mint function that requires payment
    function mint(uint256 amount) external payable {
        require(mintingEnabled, "Minting is currently disabled");
        require(amount > 0, "Amount must be greater than 0");
        require(msg.value >= price * amount, "Insufficient payment");
        require(totalSupply() + amount <= maxSupply, "Would exceed max supply");

        _mint(msg.sender, amount);
    }

    // Owner mint function for special distributions
    function ownerMint(address to, uint256 amount) external onlyOwner {
        require(to != address(0), "Cannot mint to zero address");
        require(amount > 0, "Amount must be greater than 0");
        require(totalSupply() + amount <= maxSupply, "Would exceed max supply");

        _mint(to, amount);
    }

    // Function to withdraw accumulated ETH
    function withdraw() external onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");
        
        (bool success, ) = payable(owner()).call{value: balance}("");
        require(success, "Withdrawal failed");
    }
}