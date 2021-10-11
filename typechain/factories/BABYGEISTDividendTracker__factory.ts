/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  BABYGEISTDividendTracker,
  BABYGEISTDividendTrackerInterface,
} from "../BABYGEISTDividendTracker";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "bool",
        name: "automatic",
        type: "bool",
      },
    ],
    name: "Claim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "oldValue",
        type: "uint256",
      },
    ],
    name: "ClaimWaitUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "DividendWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "weiAmount",
        type: "uint256",
      },
    ],
    name: "DividendsDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "ExcludeFromDividends",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "GEIST",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "accumulativeDividendOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "claimWait",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "distributeGEISTDividends",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "dividendOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "excludeFromDividends",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "excludedFromDividends",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "getAccount",
    outputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "int256",
        name: "index",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "iterationsUntilProcessed",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "withdrawableDividends",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalDividends",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastClaimTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "nextClaimTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsUntilAutoClaimAvailable",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getAccountAtIndex",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastProcessedIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfTokenHolders",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "lastClaimTimes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastProcessedIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minimumTokenBalanceForDividends",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "gas",
        type: "uint256",
      },
    ],
    name: "process",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
      {
        internalType: "bool",
        name: "automatic",
        type: "bool",
      },
    ],
    name: "processAccount",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "setBalance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalDividendsDistributed",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newClaimWait",
        type: "uint256",
      },
    ],
    name: "updateClaimWait",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdrawDividend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "withdrawableDividendOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "withdrawnDividendOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040527fd8321aa83fb0a4ecd6348d4577431310a6e0814d0000000000000000000000006080523480156200003557600080fd5b50604080518082018252601981527f4261627947454953545f4469766964656e5f547261636b65720000000000000060208083019182528351808501909452601784527f6247454953545f4469766964656e645f547261636b657200000000000000000090840152815191929183918391620000b4916003916200014d565b508051620000ca9060049060208401906200014d565b5050506000620000df6200014960201b60201c565b600580546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35050610e1060115550692a5a058fc295ed00000060a052620001e9565b3390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200019057805160ff1916838001178555620001c0565b82800160010185558215620001c0579182015b82811115620001c0578251825591602001919060010190620001a3565b50620001ce929150620001d2565b5090565b5b80821115620001ce5760008155600101620001d3565b60805160601c60a0516121556200021a6000398061100752806110f85250806110565280611ac452506121556000f3fe608060405234801561001057600080fd5b506004361061021c5760003560e01c80638da5cb5b11610125578063be10b614116100ad578063e7841ec01161007c578063e7841ec01461067b578063e98030c714610683578063f2fde38b146106a0578063fbcbc0f1146106c6578063ffb2c479146106ec5761021c565b8063be10b61414610611578063dd62ed3e14610619578063e0136fcf14610647578063e30443bc1461064f5761021c565b8063a457c2d7116100f4578063a457c2d71461053f578063a8b9d2401461056b578063a9059cbb14610591578063aafd847a146105bd578063bc4c4b37146105e35761021c565b80638da5cb5b146104d057806391b89fba146104f457806395d89b411461051a5780639d6d5e54146105225761021c565b806331e79db0116101a85780636a474002116101775780636a4740021461048a5780636f2789ec1461049257806370a082311461049a578063715018a6146104c057806385a6b3ae146104c85761021c565b806331e79db0146103a857806339509351146103d05780634e7b827f146103fc5780635183d6fd146104225761021c565b8063226cfa3d116101ef578063226cfa3d1461030057806323b872dd1461032657806327ce01471461035c5780633009a60914610382578063313ce5671461038a5761021c565b806306fdde0314610221578063095ea7b31461029e57806309bbedde146102de57806318160ddd146102f8575b600080fd5b610229610727565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561026357818101518382015260200161024b565b50505050905090810190601f1680156102905780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102ca600480360360408110156102b457600080fd5b506001600160a01b0381351690602001356107bd565b604080519115158252519081900360200190f35b6102e66107db565b60408051918252519081900360200190f35b6102e66107e1565b6102e66004803603602081101561031657600080fd5b50356001600160a01b03166107e7565b6102ca6004803603606081101561033c57600080fd5b506001600160a01b038135811691602081013590911690604001356107f9565b6102e66004803603602081101561037257600080fd5b50356001600160a01b0316610880565b6102e66108df565b6103926108e5565b6040805160ff9092168252519081900360200190f35b6103ce600480360360208110156103be57600080fd5b50356001600160a01b03166108ea565b005b6102ca600480360360408110156103e657600080fd5b506001600160a01b038135169060200135610a46565b6102ca6004803603602081101561041257600080fd5b50356001600160a01b0316610a94565b61043f6004803603602081101561043857600080fd5b5035610aa9565b604080516001600160a01b0390991689526020890197909752878701959095526060870193909352608086019190915260a085015260c084015260e083015251908190036101000190f35b6103ce610c08565b6102e6610c3f565b6102e6600480360360208110156104b057600080fd5b50356001600160a01b0316610c45565b6103ce610c60565b6102e6610d02565b6104d8610d08565b604080516001600160a01b039092168252519081900360200190f35b6102e66004803603602081101561050a57600080fd5b50356001600160a01b0316610d17565b610229610d22565b6103ce6004803603602081101561053857600080fd5b5035610d83565b6102ca6004803603604081101561055557600080fd5b506001600160a01b038135169060200135610e6d565b6102e66004803603602081101561058157600080fd5b50356001600160a01b0316610ed5565b6102ca600480360360408110156105a757600080fd5b506001600160a01b038135169060200135610f01565b6102e6600480360360208110156105d357600080fd5b50356001600160a01b0316610f15565b6102ca600480360360408110156105f957600080fd5b506001600160a01b0381351690602001351515610f30565b6102e6611005565b6102e66004803603604081101561062f57600080fd5b506001600160a01b0381358116916020013516611029565b6104d8611054565b6103ce6004803603604081101561066557600080fd5b506001600160a01b038135169060200135611078565b6102e6611242565b6103ce6004803603602081101561069957600080fd5b5035611248565b6103ce600480360360208110156106b657600080fd5b50356001600160a01b0316611364565b61043f600480360360208110156106dc57600080fd5b50356001600160a01b031661145d565b6107096004803603602081101561070257600080fd5b50356115d0565b60408051938452602084019290925282820152519081900360600190f35b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b35780601f10610788576101008083540402835291602001916107b3565b820191906000526020600020905b81548152906001019060200180831161079657829003601f168201915b5050505050905090565b60006107d16107ca6116ce565b84846116d2565b5060015b92915050565b600a5490565b60025490565b60106020526000908152604090205481565b60006108068484846117be565b610876846108126116ce565b6108718560405180606001604052806028815260200161201f602891396001600160a01b038a166000908152600160205260408120906108506116ce565b6001600160a01b0316815260208101919091526040016000205491906117f5565b6116d2565b5060019392505050565b6001600160a01b038116600090815260076020526040812054600160801b906108cf906108ca906108c46108bf6108b688610c45565b6006549061188c565b6118ec565b906118fc565b61192f565b816108d657fe5b0490505b919050565b600e5481565b601290565b6108f26116ce565b6005546001600160a01b03908116911614610942576040805162461bcd60e51b81526020600482018190526024820152600080516020612047833981519152604482015290519081900360640190fd5b6001600160a01b0381166000908152600f602052604090205460ff161561096857600080fd5b6001600160a01b0381166000908152600f60205260408120805460ff19166001179055610996908290611942565b6040805163131836e760e21b8152600a60048201526001600160a01b0383166024820152905173__$ce39e7eba0e8c210ce522c13d692fbaca1$__91634c60db9c916044808301926000929190829003018186803b1580156109f757600080fd5b505af4158015610a0b573d6000803e3d6000fd5b50506040516001600160a01b03841692507fa878b31040b2e6d0a9a3d3361209db3908ba62014b0dca52adbaee451d128b259150600090a250565b60006107d1610a536116ce565b846108718560016000610a646116ce565b6001600160a01b03908116825260208083019390935260409182016000908120918c16815292529020549061199b565b600f6020526000908152604090205460ff1681565b600080600080600080600080600a73__$ce39e7eba0e8c210ce522c13d692fbaca1$__63deb3d89690916040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b158015610b0757600080fd5b505af4158015610b1b573d6000803e3d6000fd5b505050506040513d6020811015610b3157600080fd5b50518910610b58575060009650600019955085945086935083925082915081905080610bfd565b6000600a73__$ce39e7eba0e8c210ce522c13d692fbaca1$__63d1aa9e7e90918c6040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b158015610bb457600080fd5b505af4158015610bc8573d6000803e3d6000fd5b505050506040513d6020811015610bde57600080fd5b50519050610beb8161145d565b98509850985098509850985098509850505b919395975091939597565b60405162461bcd60e51b815260040180806020018281038252606f815260200180611f8f606f913960800191505060405180910390fd5b60115481565b6001600160a01b031660009081526020819052604090205490565b610c686116ce565b6005546001600160a01b03908116911614610cb8576040805162461bcd60e51b81526020600482018190526024820152600080516020612047833981519152604482015290519081900360640190fd5b6005546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600580546001600160a01b0319169055565b60095481565b6005546001600160a01b031690565b60006107d582610ed5565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107b35780601f10610788576101008083540402835291602001916107b3565b610d8b6116ce565b6005546001600160a01b03908116911614610ddb576040805162461bcd60e51b81526020600482018190526024820152600080516020612047833981519152604482015290519081900360640190fd5b6000610de56107e1565b11610def57600080fd5b8015610e6a57610e20610e006107e1565b610e0e83600160801b61188c565b81610e1557fe5b60065491900461199b565b60065560408051828152905133917fa493a9229478c3fcd73f66d2cdeb7f94fd0f341da924d1054236d78454116511919081900360200190a2600954610e66908261199b565b6009555b50565b60006107d1610e7a6116ce565b84610871856040518060600160405280602581526020016120fb6025913960016000610ea46116ce565b6001600160a01b03908116825260208083019390935260409182016000908120918d168152925290205491906117f5565b6001600160a01b0381166000908152600860205260408120546107d590610efb84610880565b906119f5565b60006107d1610f0e6116ce565b84846117be565b6001600160a01b031660009081526008602052604090205490565b6000610f3a6116ce565b6005546001600160a01b03908116911614610f8a576040805162461bcd60e51b81526020600482018190526024820152600080516020612047833981519152604482015290519081900360640190fd5b6000610f9584611a37565b90508015610ffb576001600160a01b0384166000818152601060209081526040918290204290558151848152915186151593927fa2c38e2d2fb7e3e1912d937fd1ca11ed6d51864dee4cfa7a7bf02becd7acf09292908290030190a360019150506107d5565b5060009392505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b7f000000000000000000000000000000000000000000000000000000000000000081565b6110806116ce565b6005546001600160a01b039081169116146110d0576040805162461bcd60e51b81526020600482018190526024820152600080516020612047833981519152604482015290519081900360640190fd5b6001600160a01b0382166000908152600f602052604090205460ff16156110f65761123e565b7f000000000000000000000000000000000000000000000000000000000000000081106111ac576111278282611942565b60408051632f0ad01760e21b8152600a60048201526001600160a01b038416602482015260448101839052905173__$ce39e7eba0e8c210ce522c13d692fbaca1$__9163bc2b405c916064808301926000929190829003018186803b15801561118f57600080fd5b505af41580156111a3573d6000803e3d6000fd5b50505050611231565b6111b7826000611942565b6040805163131836e760e21b8152600a60048201526001600160a01b0384166024820152905173__$ce39e7eba0e8c210ce522c13d692fbaca1$__91634c60db9c916044808301926000929190829003018186803b15801561121857600080fd5b505af415801561122c573d6000803e3d6000fd5b505050505b61123c826001610f30565b505b5050565b600e5490565b6112506116ce565b6005546001600160a01b039081169116146112a0576040805162461bcd60e51b81526020600482018190526024820152600080516020612047833981519152604482015290519081900360640190fd5b610e1081101580156112b55750620151808111155b6112f05760405162461bcd60e51b815260040180806020018281038252604f815260200180612067604f913960600191505060405180910390fd5b6011548114156113315760405162461bcd60e51b8152600401808060200182810382526041815260200180611ed66041913960600191505060405180910390fd5b60115460405182907f474ea64804364a1e29a4487ddb63c3342a2dd826ccd8acf48825e680a0e6f20f90600090a3601155565b61136c6116ce565b6005546001600160a01b039081169116146113bc576040805162461bcd60e51b81526020600482018190526024820152600080516020612047833981519152604482015290519081900360640190fd5b6001600160a01b0381166114015760405162461bcd60e51b8152600401808060200182810382526026815260200180611f176026913960400191505060405180910390fd5b6005546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600580546001600160a01b0319166001600160a01b0392909216919091179055565b600080600080600080600080889750600a73__$ce39e7eba0e8c210ce522c13d692fbaca1$__6317e142d190918a6040518363ffffffff1660e01b815260040180838152602001826001600160a01b031681526020019250505060206040518083038186803b1580156114cf57600080fd5b505af41580156114e3573d6000803e3d6000fd5b505050506040513d60208110156114f957600080fd5b5051965060001995506000871261155d57600e5487111561152957600e54611522908890611bc6565b955061155d565b600e54600a546000911061153e57600061154d565b600e54600a5461154d916119f5565b905061155988826118fc565b9650505b61156688610ed5565b945061157188610880565b6001600160a01b03891660009081526010602052604090205490945092508261159b5760006115a9565b6011546115a990849061199b565b91504282116115b95760006115c3565b6115c382426119f5565b9050919395975091939597565b600a5460009081908190806115f0575050600e54600092508291506116c7565b600e546000805a90506000805b898410801561160b57508582105b156116b657600a54600190950194851061162457600094505b6000600a600001868154811061163657fe5b60009182526020808320909101546001600160a01b0316808352601090915260409091205490915061166790611bf8565b1561168357611677816001610f30565b15611683576001909101905b60019092019160005a9050808511156116ad576116aa6116a386836119f5565b879061199b565b95505b93506115fd9050565b600e85905590975095509193505050505b9193909250565b3390565b6001600160a01b0383166117175760405162461bcd60e51b81526004018080602001828103825260248152602001806120d76024913960400191505060405180910390fd5b6001600160a01b03821661175c5760405162461bcd60e51b8152600401808060200182810382526022815260200180611f3d6022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b60405162461bcd60e51b8152600401808060200182810382526030815260200180611f5f6030913960400191505060405180910390fd5b600081848411156118845760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611849578181015183820152602001611831565b50505050905090810190601f1680156118765780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60008261189b575060006107d5565b828202828482816118a857fe5b04146118e55760405162461bcd60e51b8152600401808060200182810382526021815260200180611ffe6021913960400191505060405180910390fd5b9392505050565b600081818112156107d557600080fd5b60008282018183128015906119115750838112155b80611926575060008312801561192657508381125b6118e557600080fd5b60008082121561193e57600080fd5b5090565b600061194d83610c45565b90508082111561197557600061196383836119f5565b905061196f8482611c1f565b5061123c565b8082101561123c57600061198982846119f5565b90506119958482611c83565b50505050565b6000828201838110156118e5576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60006118e583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506117f5565b600080611a4383610ed5565b90508015611bbd576001600160a01b038316600090815260086020526040902054611a6e908261199b565b6001600160a01b038416600081815260086020908152604091829020939093558051848152905191927fee503bee2bb6a87e57bc57db795f98137327401a0e7b7ce42e37926cc1a9ca4d92918290030190a260007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9059cbb85846040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b158015611b3957600080fd5b505af1158015611b4d573d6000803e3d6000fd5b505050506040513d6020811015611b6357600080fd5b5051905080611bb5576001600160a01b038416600090815260086020526040902054611b8f90836119f5565b6001600160a01b03851660009081526008602052604081209190915592506108da915050565b5090506108da565b50600092915050565b6000818303818312801590611bdb5750838113155b80611926575060008312801561192657508381136118e557600080fd5b600042821115611c0a575060006108da565b601154611c1742846119f5565b101592915050565b611c298282611cc7565b611c63611c446108bf8360065461188c90919063ffffffff16565b6001600160a01b03841660009081526007602052604090205490611bc6565b6001600160a01b0390921660009081526007602052604090209190915550565b611c8d8282611db7565b611c63611ca86108bf8360065461188c90919063ffffffff16565b6001600160a01b038416600090815260076020526040902054906118fc565b6001600160a01b038216611d22576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b611d2e6000838361123c565b600254611d3b908261199b565b6002556001600160a01b038216600090815260208190526040902054611d61908261199b565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b038216611dfc5760405162461bcd60e51b81526004018080602001828103825260218152602001806120b66021913960400191505060405180910390fd5b611e088260008361123c565b611e4581604051806060016040528060228152602001611eb4602291396001600160a01b03851660009081526020819052604090205491906117f5565b6001600160a01b038316600090815260208190526040902055600254611e6b90826119f5565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a3505056fe45524332303a206275726e20616d6f756e7420657863656564732062616c616e63654241425947454953545f4469766964656e645f547261636b65723a2043616e6e6f742075706461746520636c61696d5761697420746f2073616d652076616c75654f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f20616464726573734241425947454953545f4469766964656e645f547261636b65723a204e6f207472616e736665727320616c6c6f7765644241425947454953545f4469766964656e645f547261636b65723a2077697468647261774469766964656e642064697361626c65642e20557365207468652027636c61696d272066756e6374696f6e206f6e20746865206d61696e2042414259474549535420636f6e74726163742e536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7745524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e63654f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65724241425947454953545f4469766964656e645f547261636b65723a20636c61696d57616974206d757374206265207570646174656420746f206265747765656e203120616e6420323420686f75727345524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220097fc4e7ee9f373699821f3e913e9d559ca646b33b349a33a485cc1d87d84ea464736f6c634300060c0033";

export class BABYGEISTDividendTracker__factory extends ContractFactory {
  constructor(
    linkLibraryAddresses: BABYGEISTDividendTrackerLibraryAddresses,
    signer?: Signer
  ) {
    super(
      _abi,
      BABYGEISTDividendTracker__factory.linkBytecode(linkLibraryAddresses),
      signer
    );
  }

  static linkBytecode(
    linkLibraryAddresses: BABYGEISTDividendTrackerLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$ce39e7eba0e8c210ce522c13d692fbaca1\\$__", "g"),
      linkLibraryAddresses["contracts/IterableMapping.sol:IterableMapping"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BABYGEISTDividendTracker> {
    return super.deploy(overrides || {}) as Promise<BABYGEISTDividendTracker>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BABYGEISTDividendTracker {
    return super.attach(address) as BABYGEISTDividendTracker;
  }
  connect(signer: Signer): BABYGEISTDividendTracker__factory {
    return super.connect(signer) as BABYGEISTDividendTracker__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BABYGEISTDividendTrackerInterface {
    return new utils.Interface(_abi) as BABYGEISTDividendTrackerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BABYGEISTDividendTracker {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BABYGEISTDividendTracker;
  }
}

export interface BABYGEISTDividendTrackerLibraryAddresses {
  ["contracts/IterableMapping.sol:IterableMapping"]: string;
}
