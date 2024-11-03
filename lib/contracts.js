// lib/contract.js
import { ethers } from 'ethers';

// Replace with your deployed contract addresses
export const DEBI_NFT_ADDRESS = '0x37e2716FaF27C7Ed29Db515eF4b7560F4DDC6A57';
export const DEBI_TOKEN_ADDRESS = '0x859dD454046952D6f4C84975d9d458Ce853F7faF';

export const abiNFT = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "initialPrice",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_baseURI",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721IncorrectOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721InsufficientApproval",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOperator",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "ERC721InvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC721InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC721InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ERC721NonexistentToken",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "approved",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "ApprovalForAll",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "newBaseURI",
				"type": "string"
			}
		],
		"name": "BaseURIUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_fromTokenId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_toTokenId",
				"type": "uint256"
			}
		],
		"name": "BatchMetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "_tokenId",
				"type": "uint256"
			}
		],
		"name": "MetadataUpdate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "MintingStatusChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "PriceUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "baseURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "getApproved",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			}
		],
		"name": "isApprovedForAll",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintingEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "ownerOf",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "safeTransferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "operator",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "approved",
				"type": "bool"
			}
		],
		"name": "setApprovalForAll",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "newBaseURI",
				"type": "string"
			}
		],
		"name": "setBaseURI",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes4",
				"name": "interfaceId",
				"type": "bytes4"
			}
		],
		"name": "supportsInterface",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleMinting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "tokenURI",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "tokenId",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]
  ;

export const abiToken = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "symbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "initialPrice",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_maxSupply",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "initialOwner",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			}
		],
		"name": "OwnableInvalidOwner",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "OwnableUnauthorizedAccount",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bool",
				"name": "enabled",
				"type": "bool"
			}
		],
		"name": "MintingStatusChanged",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "PriceUpdated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "maxSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "mintingEnabled",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ownerMint",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "price",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "newPrice",
				"type": "uint256"
			}
		],
		"name": "setPrice",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "toggleMinting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];  
export const byteCodeNFT="0x608060405234801561001057600080fd5b50604051613c00380380613c0083398181016040528101906100329190610526565b806040518060400160405280600781526020017f446542694e4654000000000000000000000000000000000000000000000000008152506040518060400160405280600581526020017f44424e465400000000000000000000000000000000000000000000000000000081525081600090816100ae91906107c0565b5080600190816100be91906107c0565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036101335760006040517f1e4fbdf700000000000000000000000000000000000000000000000000000000815260040161012a91906108a1565b60405180910390fd5b6101428161025760201b60201c565b5060008411610186576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017d90610919565b60405180910390fd5b60008351116101ca576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101c190610985565b60405180910390fd5b6000821161020d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161020490610a17565b60405180910390fd5b83600881905550826009908161022391906107c0565b5081600b819055506001600a819055506001600c60006101000a81548160ff02191690831515021790555050505050610a37565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61034481610331565b811461034f57600080fd5b50565b6000815190506103618161033b565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6103ba82610371565b810181811067ffffffffffffffff821117156103d9576103d8610382565b5b80604052505050565b60006103ec61031d565b90506103f882826103b1565b919050565b600067ffffffffffffffff82111561041857610417610382565b5b61042182610371565b9050602081019050919050565b60005b8381101561044c578082015181840152602081019050610431565b60008484015250505050565b600061046b610466846103fd565b6103e2565b9050828152602081018484840111156104875761048661036c565b5b61049284828561042e565b509392505050565b600082601f8301126104af576104ae610367565b5b81516104bf848260208601610458565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006104f3826104c8565b9050919050565b610503816104e8565b811461050e57600080fd5b50565b600081519050610520816104fa565b92915050565b600080600080608085870312156105405761053f610327565b5b600061054e87828801610352565b945050602085015167ffffffffffffffff81111561056f5761056e61032c565b5b61057b8782880161049a565b935050604061058c87828801610352565b925050606061059d87828801610511565b91505092959194509250565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806105fb57607f821691505b60208210810361060e5761060d6105b4565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026106767fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610639565b6106808683610639565b95508019841693508086168417925050509392505050565b6000819050919050565b60006106bd6106b86106b384610331565b610698565b610331565b9050919050565b6000819050919050565b6106d7836106a2565b6106eb6106e3826106c4565b848454610646565b825550505050565b600090565b6107006106f3565b61070b8184846106ce565b505050565b5b8181101561072f576107246000826106f8565b600181019050610711565b5050565b601f8211156107745761074581610614565b61074e84610629565b8101602085101561075d578190505b61077161076985610629565b830182610710565b50505b505050565b600082821c905092915050565b600061079760001984600802610779565b1980831691505092915050565b60006107b08383610786565b9150826002028217905092915050565b6107c9826105a9565b67ffffffffffffffff8111156107e2576107e1610382565b5b6107ec82546105e3565b6107f7828285610733565b600060209050601f83116001811461082a5760008415610818578287015190505b61082285826107a4565b86555061088a565b601f19841661083886610614565b60005b828110156108605784890151825560018201915060208501945060208101905061083b565b8683101561087d5784890151610879601f891682610786565b8355505b6001600288020188555050505b505050505050565b61089b816104e8565b82525050565b60006020820190506108b66000830184610892565b92915050565b600082825260208201905092915050565b7f5072696365206d7573742062652067726561746572207468616e203000000000600082015250565b6000610903601c836108bc565b915061090e826108cd565b602082019050919050565b60006020820190508181036000830152610932816108f6565b9050919050565b7f42617365205552492063616e6e6f7420626520656d7074790000000000000000600082015250565b600061096f6018836108bc565b915061097a82610939565b602082019050919050565b6000602082019050818103600083015261099e81610962565b9050919050565b7f4d617820737570706c79206d7573742062652067726561746572207468616e2060008201527f3000000000000000000000000000000000000000000000000000000000000000602082015250565b6000610a016021836108bc565b9150610a0c826109a5565b604082019050919050565b60006020820190508181036000830152610a30816109f4565b9050919050565b6131ba80610a466000396000f3fe6080604052600436106101665760003560e01c8063715018a6116100d1578063a035b1fe1161008a578063c87b56dd11610064578063c87b56dd146104e1578063d5abeb011461051e578063e985e9c514610549578063f2fde38b1461058657610166565b8063a035b1fe14610464578063a22cb4651461048f578063b88d4fde146104b857610166565b8063715018a61461038c5780637d55094d146103a35780638da5cb5b146103ba57806391b7f5ed146103e557806395d89b411461040e5780639fd6db121461043957610166565b806342842e0e1161012357806342842e0e1461027957806355f804b3146102a25780636352211e146102cb5780636a627842146103085780636c0360eb1461032457806370a082311461034f57610166565b806301ffc9a71461016b57806306fdde03146101a8578063081812fc146101d3578063095ea7b31461021057806323b872dd146102395780633ccfd60b14610262575b600080fd5b34801561017757600080fd5b50610192600480360381019061018d91906121d8565b6105af565b60405161019f9190612220565b60405180910390f35b3480156101b457600080fd5b506101bd610610565b6040516101ca91906122cb565b60405180910390f35b3480156101df57600080fd5b506101fa60048036038101906101f59190612323565b6106a2565b6040516102079190612391565b60405180910390f35b34801561021c57600080fd5b50610237600480360381019061023291906123d8565b6106be565b005b34801561024557600080fd5b50610260600480360381019061025b9190612418565b6106d4565b005b34801561026e57600080fd5b506102776107d6565b005b34801561028557600080fd5b506102a0600480360381019061029b9190612418565b6108dd565b005b3480156102ae57600080fd5b506102c960048036038101906102c491906125a0565b6108fd565b005b3480156102d757600080fd5b506102f260048036038101906102ed9190612323565b610993565b6040516102ff9190612391565b60405180910390f35b610322600480360381019061031d91906125e9565b6109a5565b005b34801561033057600080fd5b50610339610b56565b60405161034691906122cb565b60405180910390f35b34801561035b57600080fd5b50610376600480360381019061037191906125e9565b610be4565b6040516103839190612625565b60405180910390f35b34801561039857600080fd5b506103a1610c9e565b005b3480156103af57600080fd5b506103b8610cb2565b005b3480156103c657600080fd5b506103cf610d2c565b6040516103dc9190612391565b60405180910390f35b3480156103f157600080fd5b5061040c60048036038101906104079190612323565b610d56565b005b34801561041a57600080fd5b50610423610de2565b60405161043091906122cb565b60405180910390f35b34801561044557600080fd5b5061044e610e74565b60405161045b9190612220565b60405180910390f35b34801561047057600080fd5b50610479610e87565b6040516104869190612625565b60405180910390f35b34801561049b57600080fd5b506104b660048036038101906104b1919061266c565b610e8d565b005b3480156104c457600080fd5b506104df60048036038101906104da919061274d565b610ea3565b005b3480156104ed57600080fd5b5061050860048036038101906105039190612323565b610ec8565b60405161051591906122cb565b60405180910390f35b34801561052a57600080fd5b50610533610fdb565b6040516105409190612625565b60405180910390f35b34801561055557600080fd5b50610570600480360381019061056b91906127d0565b610fe1565b60405161057d9190612220565b60405180910390f35b34801561059257600080fd5b506105ad60048036038101906105a891906125e9565b611075565b005b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806106095750610608826110fb565b5b9050919050565b60606000805461061f9061283f565b80601f016020809104026020016040519081016040528092919081815260200182805461064b9061283f565b80156106985780601f1061066d57610100808354040283529160200191610698565b820191906000526020600020905b81548152906001019060200180831161067b57829003601f168201915b5050505050905090565b60006106ad826111dd565b506106b782611265565b9050919050565b6106d082826106cb6112a2565b6112aa565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036107465760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161073d9190612391565b60405180910390fd5b600061075a83836107556112a2565b6112bc565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146107d0578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016107c793929190612870565b60405180910390fd5b50505050565b6107de6114d6565b600047905060008111610826576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161081d906128f3565b60405180910390fd5b6000610830610d2c565b73ffffffffffffffffffffffffffffffffffffffff168260405161085390612944565b60006040518083038185875af1925050503d8060008114610890576040519150601f19603f3d011682016040523d82523d6000602084013e610895565b606091505b50509050806108d9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d0906129a5565b60405180910390fd5b5050565b6108f883838360405180602001604052806000815250610ea3565b505050565b6109056114d6565b6000815111610949576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161094090612a11565b60405180910390fd5b80600990816109589190612bdd565b507f6741b2fc379fad678116fe3d4d4b9a1a184ab53ba36b86ad0fa66340b1ab41ad8160405161098891906122cb565b60405180910390a150565b600061099e826111dd565b9050919050565b600c60009054906101000a900460ff166109f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109eb90612cfb565b60405180910390fd5b600854341015610a39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3090612d67565b60405180910390fd5b600b54600a541115610a80576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a7790612dd3565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610aef576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae690612e3f565b60405180910390fd5b6000600a549050600a6000815480929190610b0990612e8e565b9190505550610b18828261155d565b60006009610b258361157b565b604051602001610b36929190612f95565b6040516020818303038152906040529050610b518282611649565b505050565b60098054610b639061283f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b8f9061283f565b8015610bdc5780601f10610bb157610100808354040283529160200191610bdc565b820191906000526020600020905b815481529060010190602001808311610bbf57829003601f168201915b505050505081565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610c575760006040517f89c62b64000000000000000000000000000000000000000000000000000000008152600401610c4e9190612391565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610ca66114d6565b610cb060006116a5565b565b610cba6114d6565b600c60009054906101000a900460ff1615600c60006101000a81548160ff0219169083151502179055507f41f386d449eec03c1c3b75bbba9c18df70aa19779ff47f68eab4b6a66fb399d4600c60009054906101000a900460ff16604051610d229190612220565b60405180910390a1565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b610d5e6114d6565b60008111610da1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9890613005565b60405180910390fd5b806008819055507f66cbca4f3c64fecf1dcb9ce094abcf7f68c3450a1d4e3a8e917dd621edb4ebe081604051610dd79190612625565b60405180910390a150565b606060018054610df19061283f565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1d9061283f565b8015610e6a5780601f10610e3f57610100808354040283529160200191610e6a565b820191906000526020600020905b815481529060010190602001808311610e4d57829003601f168201915b5050505050905090565b600c60009054906101000a900460ff1681565b60085481565b610e9f610e986112a2565b838361176b565b5050565b610eae8484846106d4565b610ec2610eb96112a2565b858585856118da565b50505050565b6060610ed3826111dd565b506000600660008481526020019081526020016000208054610ef49061283f565b80601f0160208091040260200160405190810160405280929190818152602001828054610f209061283f565b8015610f6d5780601f10610f4257610100808354040283529160200191610f6d565b820191906000526020600020905b815481529060010190602001808311610f5057829003601f168201915b505050505090506000610f7e611a8b565b90506000815103610f93578192505050610fd6565b600082511115610fc8578082604051602001610fb0929190613025565b60405160208183030381529060405292505050610fd6565b610fd184611aa2565b925050505b919050565b600b5481565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b61107d6114d6565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036110ef5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016110e69190612391565b60405180910390fd5b6110f8816116a5565b50565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806111c657507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806111d657506111d582611b0b565b5b9050919050565b6000806111e983611b75565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361125c57826040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016112539190612625565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b6112b78383836001611bb2565b505050565b6000806112c884611b75565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161461130a57611309818486611d77565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461139b5761134c600085600080611bb2565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff161461141e576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b6114de6112a2565b73ffffffffffffffffffffffffffffffffffffffff166114fc610d2c565b73ffffffffffffffffffffffffffffffffffffffff161461155b5761151f6112a2565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016115529190612391565b60405180910390fd5b565b611577828260405180602001604052806000815250611e3b565b5050565b60606000600161158a84611e5f565b01905060008167ffffffffffffffff8111156115a9576115a8612475565b5b6040519080825280601f01601f1916602001820160405280156115db5781602001600182028036833780820191505090505b509050600082602001820190505b60011561163e578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161163257611631613049565b5b049450600085036115e9575b819350505050919050565b806006600084815260200190815260200160002090816116699190612bdd565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516116999190612625565b60405180910390a15050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117dc57816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016117d39190612391565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516118cd9190612220565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115611a84578273ffffffffffffffffffffffffffffffffffffffff1663150b7a02868685856040518563ffffffff1660e01b815260040161193994939291906130cd565b6020604051808303816000875af192505050801561197557506040513d601f19601f82011682018060405250810190611972919061312e565b60015b6119f9573d80600081146119a5576040519150601f19603f3d011682016040523d82523d6000602084013e6119aa565b606091505b5060008151036119f157836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016119e89190612391565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614611a8257836040517f64a0ae92000000000000000000000000000000000000000000000000000000008152600401611a799190612391565b60405180910390fd5b505b5050505050565b606060405180602001604052806000815250905090565b6060611aad826111dd565b506000611ab8611a8b565b90506000815111611ad85760405180602001604052806000815250611b03565b80611ae28461157b565b604051602001611af3929190613025565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b8080611beb5750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b15611d1f576000611bfb846111dd565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611c6657508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b8015611c795750611c778184610fe1565b155b15611cbb57826040517fa9fbf51f000000000000000000000000000000000000000000000000000000008152600401611cb29190612391565b60405180910390fd5b8115611d1d57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611d82838383611fb2565b611e3657600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611df757806040517f7e273289000000000000000000000000000000000000000000000000000000008152600401611dee9190612625565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611e2d92919061315b565b60405180910390fd5b505050565b611e458383612073565b611e5a611e506112a2565b60008585856118da565b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611ebd577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611eb357611eb2613049565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611efa576d04ee2d6d415b85acef81000000008381611ef057611eef613049565b5b0492506020810190505b662386f26fc100008310611f2957662386f26fc100008381611f1f57611f1e613049565b5b0492506010810190505b6305f5e1008310611f52576305f5e1008381611f4857611f47613049565b5b0492506008810190505b6127108310611f77576127108381611f6d57611f6c613049565b5b0492506004810190505b60648310611f9a5760648381611f9057611f8f613049565b5b0492506002810190505b600a8310611fa9576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561206a57508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16148061202b575061202a8484610fe1565b5b8061206957508273ffffffffffffffffffffffffffffffffffffffff1661205183611265565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036120e55760006040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016120dc9190612391565b60405180910390fd5b60006120f3838360006112bc565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146121675760006040517f73c6ac6e00000000000000000000000000000000000000000000000000000000815260040161215e9190612391565b60405180910390fd5b505050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6121b581612180565b81146121c057600080fd5b50565b6000813590506121d2816121ac565b92915050565b6000602082840312156121ee576121ed612176565b5b60006121fc848285016121c3565b91505092915050565b60008115159050919050565b61221a81612205565b82525050565b60006020820190506122356000830184612211565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561227557808201518184015260208101905061225a565b60008484015250505050565b6000601f19601f8301169050919050565b600061229d8261223b565b6122a78185612246565b93506122b7818560208601612257565b6122c081612281565b840191505092915050565b600060208201905081810360008301526122e58184612292565b905092915050565b6000819050919050565b612300816122ed565b811461230b57600080fd5b50565b60008135905061231d816122f7565b92915050565b60006020828403121561233957612338612176565b5b60006123478482850161230e565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061237b82612350565b9050919050565b61238b81612370565b82525050565b60006020820190506123a66000830184612382565b92915050565b6123b581612370565b81146123c057600080fd5b50565b6000813590506123d2816123ac565b92915050565b600080604083850312156123ef576123ee612176565b5b60006123fd858286016123c3565b925050602061240e8582860161230e565b9150509250929050565b60008060006060848603121561243157612430612176565b5b600061243f868287016123c3565b9350506020612450868287016123c3565b92505060406124618682870161230e565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6124ad82612281565b810181811067ffffffffffffffff821117156124cc576124cb612475565b5b80604052505050565b60006124df61216c565b90506124eb82826124a4565b919050565b600067ffffffffffffffff82111561250b5761250a612475565b5b61251482612281565b9050602081019050919050565b82818337600083830152505050565b600061254361253e846124f0565b6124d5565b90508281526020810184848401111561255f5761255e612470565b5b61256a848285612521565b509392505050565b600082601f8301126125875761258661246b565b5b8135612597848260208601612530565b91505092915050565b6000602082840312156125b6576125b5612176565b5b600082013567ffffffffffffffff8111156125d4576125d361217b565b5b6125e084828501612572565b91505092915050565b6000602082840312156125ff576125fe612176565b5b600061260d848285016123c3565b91505092915050565b61261f816122ed565b82525050565b600060208201905061263a6000830184612616565b92915050565b61264981612205565b811461265457600080fd5b50565b60008135905061266681612640565b92915050565b6000806040838503121561268357612682612176565b5b6000612691858286016123c3565b92505060206126a285828601612657565b9150509250929050565b600067ffffffffffffffff8211156126c7576126c6612475565b5b6126d082612281565b9050602081019050919050565b60006126f06126eb846126ac565b6124d5565b90508281526020810184848401111561270c5761270b612470565b5b612717848285612521565b509392505050565b600082601f8301126127345761273361246b565b5b81356127448482602086016126dd565b91505092915050565b6000806000806080858703121561276757612766612176565b5b6000612775878288016123c3565b9450506020612786878288016123c3565b93505060406127978782880161230e565b925050606085013567ffffffffffffffff8111156127b8576127b761217b565b5b6127c48782880161271f565b91505092959194509250565b600080604083850312156127e7576127e6612176565b5b60006127f5858286016123c3565b9250506020612806858286016123c3565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061285757607f821691505b60208210810361286a57612869612810565b5b50919050565b60006060820190506128856000830186612382565b6128926020830185612616565b61289f6040830184612382565b949350505050565b7f4e6f2066756e647320746f207769746864726177000000000000000000000000600082015250565b60006128dd601483612246565b91506128e8826128a7565b602082019050919050565b6000602082019050818103600083015261290c816128d0565b9050919050565b600081905092915050565b50565b600061292e600083612913565b91506129398261291e565b600082019050919050565b600061294f82612921565b9150819050919050565b7f5769746864726177616c206661696c6564000000000000000000000000000000600082015250565b600061298f601183612246565b915061299a82612959565b602082019050919050565b600060208201905081810360008301526129be81612982565b9050919050565b7f42617365205552492063616e6e6f7420626520656d7074790000000000000000600082015250565b60006129fb601883612246565b9150612a06826129c5565b602082019050919050565b60006020820190508181036000830152612a2a816129ee565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302612a937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82612a56565b612a9d8683612a56565b95508019841693508086168417925050509392505050565b6000819050919050565b6000612ada612ad5612ad0846122ed565b612ab5565b6122ed565b9050919050565b6000819050919050565b612af483612abf565b612b08612b0082612ae1565b848454612a63565b825550505050565b600090565b612b1d612b10565b612b28818484612aeb565b505050565b5b81811015612b4c57612b41600082612b15565b600181019050612b2e565b5050565b601f821115612b9157612b6281612a31565b612b6b84612a46565b81016020851015612b7a578190505b612b8e612b8685612a46565b830182612b2d565b50505b505050565b600082821c905092915050565b6000612bb460001984600802612b96565b1980831691505092915050565b6000612bcd8383612ba3565b9150826002028217905092915050565b612be68261223b565b67ffffffffffffffff811115612bff57612bfe612475565b5b612c09825461283f565b612c14828285612b50565b600060209050601f831160018114612c475760008415612c35578287015190505b612c3f8582612bc1565b865550612ca7565b601f198416612c5586612a31565b60005b82811015612c7d57848901518255600182019150602085019450602081019050612c58565b86831015612c9a5784890151612c96601f891682612ba3565b8355505b6001600288020188555050505b505050505050565b7f4d696e74696e672069732063757272656e746c792064697361626c6564000000600082015250565b6000612ce5601d83612246565b9150612cf082612caf565b602082019050919050565b60006020820190508181036000830152612d1481612cd8565b9050919050565b7f496e73756666696369656e742066756e647320746f206d696e74204e46540000600082015250565b6000612d51601e83612246565b9150612d5c82612d1b565b602082019050919050565b60006020820190508181036000830152612d8081612d44565b9050919050565b7f4d617820737570706c7920726561636865640000000000000000000000000000600082015250565b6000612dbd601283612246565b9150612dc882612d87565b602082019050919050565b60006020820190508181036000830152612dec81612db0565b9050919050565b7f43616e6e6f74206d696e7420746f207a65726f20616464726573730000000000600082015250565b6000612e29601b83612246565b9150612e3482612df3565b602082019050919050565b60006020820190508181036000830152612e5881612e1c565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000612e99826122ed565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203612ecb57612eca612e5f565b5b600182019050919050565b600081905092915050565b60008154612eee8161283f565b612ef88186612ed6565b94506001821660008114612f135760018114612f2857612f5b565b60ff1983168652811515820286019350612f5b565b612f3185612a31565b60005b83811015612f5357815481890152600182019150602081019050612f34565b838801955050505b50505092915050565b6000612f6f8261223b565b612f798185612ed6565b9350612f89818560208601612257565b80840191505092915050565b6000612fa18285612ee1565b9150612fad8284612f64565b91508190509392505050565b7f5072696365206d7573742062652067726561746572207468616e203000000000600082015250565b6000612fef601c83612246565b9150612ffa82612fb9565b602082019050919050565b6000602082019050818103600083015261301e81612fe2565b9050919050565b60006130318285612f64565b915061303d8284612f64565b91508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b600081519050919050565b600082825260208201905092915050565b600061309f82613078565b6130a98185613083565b93506130b9818560208601612257565b6130c281612281565b840191505092915050565b60006080820190506130e26000830187612382565b6130ef6020830186612382565b6130fc6040830185612616565b818103606083015261310e8184613094565b905095945050505050565b600081519050613128816121ac565b92915050565b60006020828403121561314457613143612176565b5b600061315284828501613119565b91505092915050565b60006040820190506131706000830185612382565b61317d6020830184612616565b939250505056fea264697066735822122031846051d7d5bd37d62e3efb8a55f4b4b08386767c183c05ae28e1f5e596d55f64736f6c634300081b0033"
export const byteCodeToken="0x608060405234801561001057600080fd5b5060405161255c38038061255c83398181016040528101906100329190610461565b8085858160039081610044919061072b565b508060049081610054919061072b565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100c95760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100c0919061080c565b60405180910390fd5b6100d88161019260201b60201c565b506000831161011c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011390610884565b60405180910390fd5b6000821161015f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015690610916565b60405180910390fd5b82600681905550816007819055506001600860006101000a81548160ff0219169083151502179055505050505050610936565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6102bf82610276565b810181811067ffffffffffffffff821117156102de576102dd610287565b5b80604052505050565b60006102f1610258565b90506102fd82826102b6565b919050565b600067ffffffffffffffff82111561031d5761031c610287565b5b61032682610276565b9050602081019050919050565b60005b83811015610351578082015181840152602081019050610336565b60008484015250505050565b600061037061036b84610302565b6102e7565b90508281526020810184848401111561038c5761038b610271565b5b610397848285610333565b509392505050565b600082601f8301126103b4576103b361026c565b5b81516103c484826020860161035d565b91505092915050565b6000819050919050565b6103e0816103cd565b81146103eb57600080fd5b50565b6000815190506103fd816103d7565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061042e82610403565b9050919050565b61043e81610423565b811461044957600080fd5b50565b60008151905061045b81610435565b92915050565b600080600080600060a0868803121561047d5761047c610262565b5b600086015167ffffffffffffffff81111561049b5761049a610267565b5b6104a78882890161039f565b955050602086015167ffffffffffffffff8111156104c8576104c7610267565b5b6104d48882890161039f565b94505060406104e5888289016103ee565b93505060606104f6888289016103ee565b92505060806105078882890161044c565b9150509295509295909350565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061056657607f821691505b6020821081036105795761057861051f565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026105e17fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826105a4565b6105eb86836105a4565b95508019841693508086168417925050509392505050565b6000819050919050565b600061062861062361061e846103cd565b610603565b6103cd565b9050919050565b6000819050919050565b6106428361060d565b61065661064e8261062f565b8484546105b1565b825550505050565b600090565b61066b61065e565b610676818484610639565b505050565b5b8181101561069a5761068f600082610663565b60018101905061067c565b5050565b601f8211156106df576106b08161057f565b6106b984610594565b810160208510156106c8578190505b6106dc6106d485610594565b83018261067b565b50505b505050565b600082821c905092915050565b6000610702600019846008026106e4565b1980831691505092915050565b600061071b83836106f1565b9150826002028217905092915050565b61073482610514565b67ffffffffffffffff81111561074d5761074c610287565b5b610757825461054e565b61076282828561069e565b600060209050601f8311600181146107955760008415610783578287015190505b61078d858261070f565b8655506107f5565b601f1984166107a38661057f565b60005b828110156107cb578489015182556001820191506020850194506020810190506107a6565b868310156107e857848901516107e4601f8916826106f1565b8355505b6001600288020188555050505b505050505050565b61080681610423565b82525050565b600060208201905061082160008301846107fd565b92915050565b600082825260208201905092915050565b7f5072696365206d7573742062652067726561746572207468616e203000000000600082015250565b600061086e601c83610827565b915061087982610838565b602082019050919050565b6000602082019050818103600083015261089d81610861565b9050919050565b7f4d617820737570706c79206d7573742062652067726561746572207468616e2060008201527f3000000000000000000000000000000000000000000000000000000000000000602082015250565b6000610900602183610827565b915061090b826108a4565b604082019050919050565b6000602082019050818103600083015261092f816108f3565b9050919050565b611c17806109456000396000f3fe60806040526004361061011f5760003560e01c80638da5cb5b116100a0578063a0712d6811610064578063a0712d681461039f578063a9059cbb146103bb578063d5abeb01146103f8578063dd62ed3e14610423578063f2fde38b146104605761011f565b80638da5cb5b146102ca57806391b7f5ed146102f557806395d89b411461031e5780639fd6db1214610349578063a035b1fe146103745761011f565b80633ccfd60b116100e75780633ccfd60b1461021f578063484b973c1461023657806370a082311461025f578063715018a61461029c5780637d55094d146102b35761011f565b806306fdde0314610124578063095ea7b31461014f57806318160ddd1461018c57806323b872dd146101b7578063313ce567146101f4575b600080fd5b34801561013057600080fd5b50610139610489565b6040516101469190611456565b60405180910390f35b34801561015b57600080fd5b5061017660048036038101906101719190611511565b61051b565b604051610183919061156c565b60405180910390f35b34801561019857600080fd5b506101a161053e565b6040516101ae9190611596565b60405180910390f35b3480156101c357600080fd5b506101de60048036038101906101d991906115b1565b610548565b6040516101eb919061156c565b60405180910390f35b34801561020057600080fd5b50610209610577565b6040516102169190611620565b60405180910390f35b34801561022b57600080fd5b50610234610580565b005b34801561024257600080fd5b5061025d60048036038101906102589190611511565b610687565b005b34801561026b57600080fd5b506102866004803603810190610281919061163b565b6107a6565b6040516102939190611596565b60405180910390f35b3480156102a857600080fd5b506102b16107ee565b005b3480156102bf57600080fd5b506102c8610802565b005b3480156102d657600080fd5b506102df61087c565b6040516102ec9190611677565b60405180910390f35b34801561030157600080fd5b5061031c60048036038101906103179190611692565b6108a6565b005b34801561032a57600080fd5b50610333610932565b6040516103409190611456565b60405180910390f35b34801561035557600080fd5b5061035e6109c4565b60405161036b919061156c565b60405180910390f35b34801561038057600080fd5b506103896109d7565b6040516103969190611596565b60405180910390f35b6103b960048036038101906103b49190611692565b6109dd565b005b3480156103c757600080fd5b506103e260048036038101906103dd9190611511565b610b23565b6040516103ef919061156c565b60405180910390f35b34801561040457600080fd5b5061040d610b46565b60405161041a9190611596565b60405180910390f35b34801561042f57600080fd5b5061044a600480360381019061044591906116bf565b610b4c565b6040516104579190611596565b60405180910390f35b34801561046c57600080fd5b506104876004803603810190610482919061163b565b610bd3565b005b6060600380546104989061172e565b80601f01602080910402602001604051908101604052809291908181526020018280546104c49061172e565b80156105115780601f106104e657610100808354040283529160200191610511565b820191906000526020600020905b8154815290600101906020018083116104f457829003601f168201915b5050505050905090565b600080610526610c59565b9050610533818585610c61565b600191505092915050565b6000600254905090565b600080610553610c59565b9050610560858285610c73565b61056b858585610d07565b60019150509392505050565b60006012905090565b610588610dfb565b6000479050600081116105d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105c7906117ab565b60405180910390fd5b60006105da61087c565b73ffffffffffffffffffffffffffffffffffffffff16826040516105fd906117fc565b60006040518083038185875af1925050503d806000811461063a576040519150601f19603f3d011682016040523d82523d6000602084013e61063f565b606091505b5050905080610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a9061185d565b60405180910390fd5b5050565b61068f610dfb565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f5906118c9565b60405180910390fd5b60008111610741576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073890611935565b60405180910390fd5b6007548161074d61053e565b6107579190611984565b1115610798576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161078f90611a04565b60405180910390fd5b6107a28282610e82565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107f6610dfb565b6108006000610f04565b565b61080a610dfb565b600860009054906101000a900460ff1615600860006101000a81548160ff0219169083151502179055507f41f386d449eec03c1c3b75bbba9c18df70aa19779ff47f68eab4b6a66fb399d4600860009054906101000a900460ff16604051610872919061156c565b60405180910390a1565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108ae610dfb565b600081116108f1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e890611a70565b60405180910390fd5b806006819055507f66cbca4f3c64fecf1dcb9ce094abcf7f68c3450a1d4e3a8e917dd621edb4ebe0816040516109279190611596565b60405180910390a150565b6060600480546109419061172e565b80601f016020809104026020016040519081016040528092919081815260200182805461096d9061172e565b80156109ba5780601f1061098f576101008083540402835291602001916109ba565b820191906000526020600020905b81548152906001019060200180831161099d57829003601f168201915b5050505050905090565b600860009054906101000a900460ff1681565b60065481565b600860009054906101000a900460ff16610a2c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2390611adc565b60405180910390fd5b60008111610a6f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a6690611935565b60405180910390fd5b80600654610a7d9190611afc565b341015610abf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab690611b8a565b60405180910390fd5b60075481610acb61053e565b610ad59190611984565b1115610b16576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0d90611a04565b60405180910390fd5b610b203382610e82565b50565b600080610b2e610c59565b9050610b3b818585610d07565b600191505092915050565b60075481565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610bdb610dfb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610c4d5760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610c449190611677565b60405180910390fd5b610c5681610f04565b50565b600033905090565b610c6e8383836001610fca565b505050565b6000610c7f8484610b4c565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610d015781811015610cf1578281836040517ffb8f41b2000000000000000000000000000000000000000000000000000000008152600401610ce893929190611baa565b60405180910390fd5b610d0084848484036000610fca565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610d795760006040517f96c6fd1e000000000000000000000000000000000000000000000000000000008152600401610d709190611677565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610deb5760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610de29190611677565b60405180910390fd5b610df68383836111a1565b505050565b610e03610c59565b73ffffffffffffffffffffffffffffffffffffffff16610e2161087c565b73ffffffffffffffffffffffffffffffffffffffff1614610e8057610e44610c59565b6040517f118cdaa7000000000000000000000000000000000000000000000000000000008152600401610e779190611677565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ef45760006040517fec442f05000000000000000000000000000000000000000000000000000000008152600401610eeb9190611677565b60405180910390fd5b610f00600083836111a1565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff160361103c5760006040517fe602df050000000000000000000000000000000000000000000000000000000081526004016110339190611677565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036110ae5760006040517f94280d620000000000000000000000000000000000000000000000000000000081526004016110a59190611677565b60405180910390fd5b81600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550801561119b578273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925846040516111929190611596565b60405180910390a35b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036111f35780600260008282546111e79190611984565b925050819055506112c6565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490508181101561127f578381836040517fe450d38c00000000000000000000000000000000000000000000000000000000815260040161127693929190611baa565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361130f578060026000828254039250508190555061135c565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516113b99190611596565b60405180910390a3505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114005780820151818401526020810190506113e5565b60008484015250505050565b6000601f19601f8301169050919050565b6000611428826113c6565b61143281856113d1565b93506114428185602086016113e2565b61144b8161140c565b840191505092915050565b60006020820190508181036000830152611470818461141d565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114a88261147d565b9050919050565b6114b88161149d565b81146114c357600080fd5b50565b6000813590506114d5816114af565b92915050565b6000819050919050565b6114ee816114db565b81146114f957600080fd5b50565b60008135905061150b816114e5565b92915050565b6000806040838503121561152857611527611478565b5b6000611536858286016114c6565b9250506020611547858286016114fc565b9150509250929050565b60008115159050919050565b61156681611551565b82525050565b6000602082019050611581600083018461155d565b92915050565b611590816114db565b82525050565b60006020820190506115ab6000830184611587565b92915050565b6000806000606084860312156115ca576115c9611478565b5b60006115d8868287016114c6565b93505060206115e9868287016114c6565b92505060406115fa868287016114fc565b9150509250925092565b600060ff82169050919050565b61161a81611604565b82525050565b60006020820190506116356000830184611611565b92915050565b60006020828403121561165157611650611478565b5b600061165f848285016114c6565b91505092915050565b6116718161149d565b82525050565b600060208201905061168c6000830184611668565b92915050565b6000602082840312156116a8576116a7611478565b5b60006116b6848285016114fc565b91505092915050565b600080604083850312156116d6576116d5611478565b5b60006116e4858286016114c6565b92505060206116f5858286016114c6565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061174657607f821691505b602082108103611759576117586116ff565b5b50919050565b7f4e6f2066756e647320746f207769746864726177000000000000000000000000600082015250565b60006117956014836113d1565b91506117a08261175f565b602082019050919050565b600060208201905081810360008301526117c481611788565b9050919050565b600081905092915050565b50565b60006117e66000836117cb565b91506117f1826117d6565b600082019050919050565b6000611807826117d9565b9150819050919050565b7f5769746864726177616c206661696c6564000000000000000000000000000000600082015250565b60006118476011836113d1565b915061185282611811565b602082019050919050565b600060208201905081810360008301526118768161183a565b9050919050565b7f43616e6e6f74206d696e7420746f207a65726f20616464726573730000000000600082015250565b60006118b3601b836113d1565b91506118be8261187d565b602082019050919050565b600060208201905081810360008301526118e2816118a6565b9050919050565b7f416d6f756e74206d7573742062652067726561746572207468616e2030000000600082015250565b600061191f601d836113d1565b915061192a826118e9565b602082019050919050565b6000602082019050818103600083015261194e81611912565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061198f826114db565b915061199a836114db565b92508282019050808211156119b2576119b1611955565b5b92915050565b7f576f756c6420657863656564206d617820737570706c79000000000000000000600082015250565b60006119ee6017836113d1565b91506119f9826119b8565b602082019050919050565b60006020820190508181036000830152611a1d816119e1565b9050919050565b7f5072696365206d7573742062652067726561746572207468616e203000000000600082015250565b6000611a5a601c836113d1565b9150611a6582611a24565b602082019050919050565b60006020820190508181036000830152611a8981611a4d565b9050919050565b7f4d696e74696e672069732063757272656e746c792064697361626c6564000000600082015250565b6000611ac6601d836113d1565b9150611ad182611a90565b602082019050919050565b60006020820190508181036000830152611af581611ab9565b9050919050565b6000611b07826114db565b9150611b12836114db565b9250828202611b20816114db565b91508282048414831517611b3757611b36611955565b5b5092915050565b7f496e73756666696369656e74207061796d656e74000000000000000000000000600082015250565b6000611b746014836113d1565b9150611b7f82611b3e565b602082019050919050565b60006020820190508181036000830152611ba381611b67565b9050919050565b6000606082019050611bbf6000830186611668565b611bcc6020830185611587565b611bd96040830184611587565b94935050505056fea2646970667358221220baf5b2086cb46bd99c8e0809c1f66577f4f510e9eac3361d9fea67a37087138e64736f6c634300081b0033"
export const getNFTContract = (provider) => {
    return new ethers.Contract(DEBI_NFT_ADDRESS, abiNFT, provider);
};

export const getTokenContract = (provider) => {
    return new ethers.Contract(DEBI_TOKEN_ADDRESS, abiToken, provider);
};
