/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  DividendPayingTokenOptionalInterface,
  DividendPayingTokenOptionalInterfaceInterface,
} from "../DividendPayingTokenOptionalInterface";

const _abi = [
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

export class DividendPayingTokenOptionalInterface__factory {
  static readonly abi = _abi;
  static createInterface(): DividendPayingTokenOptionalInterfaceInterface {
    return new utils.Interface(
      _abi
    ) as DividendPayingTokenOptionalInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DividendPayingTokenOptionalInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as DividendPayingTokenOptionalInterface;
  }
}
