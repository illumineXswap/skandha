/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, ContractFactory, Overrides, Signer, utils } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LuminexTokenPaymaster,
  LuminexTokenPaymasterInterface,
} from "../LuminexTokenPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "_wrappedNative",
        type: "address",
      },
      {
        internalType: "contract LuminexAccountFactory",
        name: "_accountFactory",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "debt",
        type: "uint256",
      },
    ],
    name: "AccountDebt",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "BeneficiarySet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "contract LuminexOracle",
        name: "oracle",
        type: "address",
      },
    ],
    name: "OracleSet",
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
    inputs: [],
    name: "COST_OF_POST",
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
    name: "WRAPPED_NATIVE",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "accountFactory",
    outputs: [
      {
        internalType: "contract LuminexAccountFactory",
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
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "beneficiary",
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
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minNative",
        type: "uint256",
      },
      {
        internalType: "address payable",
        name: "receiver",
        type: "address",
      },
    ],
    name: "buyNativeForToken",
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
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "debt",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxAllowance",
        type: "uint256",
      },
    ],
    name: "getHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    name: "oracles",
    outputs: [
      {
        internalType: "contract LuminexOracle",
        name: "",
        type: "address",
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
        internalType: "bytes",
        name: "paymasterAndData",
        type: "bytes",
      },
    ],
    name: "parsePaymasterAndData",
    outputs: [
      {
        internalType: "uint48",
        name: "validUntil",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "validAfter",
        type: "uint48",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "maxAllowance",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "debtor",
        type: "address",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "payDebt",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
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
        internalType: "address",
        name: "newBeneficiary",
        type: "address",
      },
    ],
    name: "setBeneficiary",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "contract LuminexOracle",
        name: "oracle",
        type: "address",
      },
    ],
    name: "setOracle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        internalType: "bool",
        name: "trust",
        type: "bool",
      },
    ],
    name: "setSignerTrust",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
    ],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minNative",
        type: "uint256",
      },
    ],
    name: "tokensRequiredForNative",
    outputs: [
      {
        internalType: "uint256",
        name: "_tokenRequired",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "trustedSigners",
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
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "maxCost",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "validationData",
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
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162002d7b38038062002d7b833981016040819052620000349162000141565b828285620000423362000084565b6001600160a01b0316608052620000598262000084565b6200006482620000d4565b6001600160a01b0390811660a0529190911660c05250620001a992505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600180546001600160a01b0319166001600160a01b0383169081179091556040519081527f04d55a8be181fb8d75b76f2d48aa0b2ee40f47e53d6e61763eeeec46feea8a249060200160405180910390a150565b6001600160a01b03811681146200013e57600080fd5b50565b600080600080608085870312156200015857600080fd5b8451620001658162000128565b6020860151909450620001788162000128565b60408601519093506200018b8162000128565b60608601519092506200019e8162000128565b939692955090935050565b60805160a05160c051612b63620002186000396000818161033e0152611a7301526000818161057b01526109b801526000818161049d01528181610667015281816107450152818161117c0152818161128d0152818161131d015281816113d001526118a60152612b636000f3fe6080604052600436106101c65760003560e01c80638da5cb5b116100f7578063c23a5cea11610095578063d999984d11610064578063d999984d14610569578063f2fde38b1461059d578063f465c77e146105bd578063f7777688146105eb57600080fd5b8063c23a5cea146104f4578063c399ec8814610514578063d0e30db014610529578063d449300d1461053157600080fd5b8063addd5099116100d1578063addd509914610448578063b0d691fe1461048b578063bb9fe6bf146104bf578063bc25cf77146104d457600080fd5b80638da5cb5b146103cb57806394d4ad60146103f6578063a9a234091461042857600080fd5b80635c38eb3a11610164578063712b772f1161013e578063712b772f14610360578063715018a6146103805780637472ff8e14610395578063796d4371146103b557600080fd5b80635c38eb3a146102ec5780635d1eedd71461030c578063687cd9c11461032c57600080fd5b8063290da2ad116101a0578063290da2ad14610227578063311ad9061461025a57806338af3eed1461027a5780635066f84c146102cc57600080fd5b80630396cb60146101d25780631c31f710146101e7578063205c28781461020757600080fd5b366101cd57005b600080fd5b6101e56101e03660046124ae565b61062b565b005b3480156101f357600080fd5b506101e56102023660046124fd565b6106dd565b34801561021357600080fd5b506101e561022236600461251a565b6106f1565b34801561023357600080fd5b5061024761024236600461257a565b610789565b6040519081526020015b60405180910390f35b34801561026657600080fd5b506101e5610275366004612601565b6107d1565b34801561028657600080fd5b506001546102a79073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610251565b3480156102d857600080fd5b506102476102e736600461251a565b610881565b3480156102f857600080fd5b506101e561030736600461263a565b6109ae565b34801561031857600080fd5b506101e5610327366004612668565b610c8e565b34801561033857600080fd5b506102a77f000000000000000000000000000000000000000000000000000000000000000081565b34801561036c57600080fd5b506101e561037b36600461263a565b610f80565b34801561038c57600080fd5b506101e561103a565b3480156103a157600080fd5b506101e56103b036600461263a565b61104e565b3480156103c157600080fd5b50610247613a9881565b3480156103d757600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff166102a7565b34801561040257600080fd5b506104166104113660046126f4565b6110b5565b60405161025196959493929190612736565b34801561043457600080fd5b506101e56104433660046127c4565b611158565b34801561045457600080fd5b506102a76104633660046124fd565b60026020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b34801561049757600080fd5b506102a77f000000000000000000000000000000000000000000000000000000000000000081565b3480156104cb57600080fd5b506101e5611172565b3480156104e057600080fd5b506101e56104ef3660046124fd565b6111f6565b34801561050057600080fd5b506101e561050f3660046124fd565b611240565b34801561052057600080fd5b506102476112ec565b6101e56113a2565b34801561053d57600080fd5b5061024761054c36600461263a565b600360209081526000928352604080842090915290825290205481565b34801561057557600080fd5b506102a77f000000000000000000000000000000000000000000000000000000000000000081565b3480156105a957600080fd5b506101e56105b83660046124fd565b61142a565b3480156105c957600080fd5b506105dd6105d8366004612824565b6114de565b6040516102519291906128e0565b3480156105f757600080fd5b5061061b6106063660046124fd565b60046020526000908152604090205460ff1681565b6040519015158152602001610251565b610633611501565b6040517f0396cb6000000000000000000000000000000000000000000000000000000000815263ffffffff821660048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690630396cb609034906024016000604051808303818588803b1580156106c157600080fd5b505af11580156106d5573d6000803e3d6000fd5b505050505050565b6106e5611501565b6106ee81611582565b50565b6106f9611501565b6040517f205c287800000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8381166004830152602482018390527f0000000000000000000000000000000000000000000000000000000000000000169063205c287890604401600060405180830381600087803b1580156106c157600080fd5b6000610794866115fb565b4630878787876040516020016107b09796959493929190612902565b60405160208183030381529060405280519060200120905095945050505050565b6107d9611501565b80156108315773ffffffffffffffffffffffffffffffffffffffff8216600090815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790555050565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260046020526040902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001690555b5050565b73ffffffffffffffffffffffffffffffffffffffff80831660009081526002602052604081205490911680610917576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f49582d4558333020546f6b656e206e6f7420737570706f72746564000000000060448201526064015b60405180910390fd5b6040517fde1b3bf90000000000000000000000000000000000000000000000000000000081526004810184905273ffffffffffffffffffffffffffffffffffffffff82169063de1b3bf990602401602060405180830381865afa158015610982573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109a69190612966565b949350505050565b6109b6611501565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16630dfe16816040518163ffffffff1660e01b8152600401602060405180830381865afa158015610a38573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a5c919061297f565b73ffffffffffffffffffffffffffffffffffffffff1614610aff576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f49582d4558323020746f6b656e302073686f756c64206265205752415050454460448201527f5f4e415449564500000000000000000000000000000000000000000000000000606482015260840161090e565b8173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663d21220a76040518163ffffffff1660e01b8152600401602060405180830381865afa158015610b61573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b85919061297f565b73ffffffffffffffffffffffffffffffffffffffff1614610c02576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f49582d4558323120746f6b656e3120646f6573206e6f74206d61746368000000604482015260640161090e565b73ffffffffffffffffffffffffffffffffffffffff82811660008181526002602090815260409182902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169486169485179055905192835290917fc1d3048301c0d23629a2532c8defa6d68f8e1a0e4157918769e9fb1b2eeb888e910160405180910390a25050565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152600260205260409020541680610d1d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f49582d4558313020546f6b656e206e6f7420737570706f727465640000000000604482015260640161090e565b82471015610d87576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f49582d45583131204e6f7420656e6f756768206c697175696469747900000000604482015260640161090e565b6040517f906691ff0000000000000000000000000000000000000000000000000000000081526004810185905260009073ffffffffffffffffffffffffffffffffffffffff83169063906691ff90602401602060405180830381865afa158015610df5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e199190612966565b905083811015610e85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f49582d45583132204e617469766520707269636520746f6f2068696768000000604482015260640161090e565b610ead3360015473ffffffffffffffffffffffffffffffffffffffff8981169291168861163a565b60008373ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d8060008114610f07576040519150601f19603f3d011682016040523d82523d6000602084013e610f0c565b606091505b5050905080610f77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f49582d45583134204661696c656420746f2073656e6400000000000000000000604482015260640161090e565b50505050505050565b610f88611501565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015261087d90829073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015610ff8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061101c9190612966565b73ffffffffffffffffffffffffffffffffffffffff85169190611716565b611042611501565b61104c600061176c565b565b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600360209081526040808320938516835292905220546110a43373ffffffffffffffffffffffffffffffffffffffff841690308461163a565b6110b0838360006117e1565b505050565b60008080803681876014886110cb82600661299c565b6110d690600661299c565b6110e190601461299c565b6110ec90602061299c565b926110f9939291906129d6565b8101906111069190612a00565b92985090965094509250878761111e6014600661299c565b61112990600661299c565b61113490601461299c565b61113f90602061299c565b61114a9282906129d6565b915091509295509295509295565b61116061188e565b61116c8484848461192d565b50505050565b61117a611501565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156111e257600080fd5b505af115801561116c573d6000803e3d6000fd5b6111fe611501565b60405173ffffffffffffffffffffffffffffffffffffffff8216904780156108fc02916000818181858888f1935050505015801561087d573d6000803e3d6000fd5b611248611501565b6040517fc23a5cea00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff82811660048301527f0000000000000000000000000000000000000000000000000000000000000000169063c23a5cea90602401600060405180830381600087803b1580156112d157600080fd5b505af11580156112e5573d6000803e3d6000fd5b5050505050565b6040517f70a082310000000000000000000000000000000000000000000000000000000081523060048201526000907f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015611379573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061139d9190612966565b905090565b6040517fb760faf90000000000000000000000000000000000000000000000000000000081523060048201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff169063b760faf99034906024016000604051808303818588803b1580156112d157600080fd5b611432611501565b73ffffffffffffffffffffffffffffffffffffffff81166114d5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161090e565b6106ee8161176c565b606060006114ea61188e565b6114f58585856119e8565b91509150935093915050565b60005473ffffffffffffffffffffffffffffffffffffffff16331461104c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161090e565b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff83169081179091556040519081527f04d55a8be181fb8d75b76f2d48aa0b2ee40f47e53d6e61763eeeec46feea8a249060200160405180910390a150565b606036600061160e610120850185612a4d565b915091508360208184030360405194506020810185016040528085528082602087013750505050919050565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261116c9085907f23b872dd00000000000000000000000000000000000000000000000000000000906084015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611e53565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526110b09084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611694565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff80841660009081526003602090815260408083209386168352929052205481900361182057505050565b73ffffffffffffffffffffffffffffffffffffffff83811660009081526003602090815260408083209386168084529382529182902084905590518381527f97f3dcec87837c326c88c6e2372e45ef9bcf33601ecf8efe00f8eabaa54e3697910160405180910390a2505050565b3373ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000161461104c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f53656e646572206e6f7420456e747279506f696e740000000000000000000000604482015260640161090e565b60008061193c8486018661263a565b73ffffffffffffffffffffffffffffffffffffffff808316600090815260036020908152604080832093851683529290529081205492945090925081611988846102e7613a988961299c565b611992919061299c565b905060028860028111156119a8576119a8612ab2565b146119d3576119cf73ffffffffffffffffffffffffffffffffffffffff841685308461163a565b5060005b6119de8484836117e1565b5050505050505050565b60606000808080803681611a036104116101208d018d612a4d565b949a509298509096509450925090506000600381611a2460208f018f6124fd565b73ffffffffffffffffffffffffffffffffffffffff90811682526020808301939093526040918201600090812091891681529252902054611a65868c610881565b611a6f919061299c565b90507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663f7888aec868e6000016020810190611ac191906124fd565b6040517fffffffff0000000000000000000000000000000000000000000000000000000060e085901b16815273ffffffffffffffffffffffffffffffffffffffff928316600482015291166024820152604401602060405180830381865afa158015611b31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611b559190612966565b811115611bbe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f49582d54503130204e6f7420656e6f7567682062616c616e6365000000000000604482015260640161090e565b83811115611c28576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601b60248201527f49582d545031312061626f7665206d617820616c6c6f77616e63650000000000604482015260640161090e565b613a988c60a0013511611c97576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f49582d54503132206e6f7420656e6f75676820666f7220706f73744f70000000604482015260640161090e565b6040821480611ca65750604182145b611d32576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603460248201527f49582d5450313320696e76616c6964207369676e6174757265206c656e67746860448201527f20696e207061796d6173746572416e6444617461000000000000000000000000606482015260840161090e565b6000611d77611d448e8a8a8a8a610789565b7f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c91909152603c902090565b9050600060046000611dbf8488888080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250611f6292505050565b73ffffffffffffffffffffffffffffffffffffffff16815260208101919091526040016000205460ff169050611df781158a8a611f88565b9950611e0660208f018f6124fd565b6040805173ffffffffffffffffffffffffffffffffffffffff9283166020820152918916908201526060016040516020818303038152906040529a50505050505050505050935093915050565b6000611eb5826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611fc09092919063ffffffff16565b9050805160001480611ed6575080806020019051810190611ed69190612ae1565b6110b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f74207375636365656400000000000000000000000000000000000000000000606482015260840161090e565b6000806000611f718585611fcf565b91509150611f7e81612014565b5090505b92915050565b600060d08265ffffffffffff16901b60a08465ffffffffffff16901b85611fb0576000611fb3565b60015b60ff161717949350505050565b60606109a684846000856121c7565b60008082516041036120055760208301516040840151606085015160001a611ff9878285856122e0565b9450945050505061200d565b506000905060025b9250929050565b600081600481111561202857612028612ab2565b036120305750565b600181600481111561204457612044612ab2565b036120ab576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015260640161090e565b60028160048111156120bf576120bf612ab2565b03612126576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015260640161090e565b600381600481111561213a5761213a612ab2565b036106ee576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f7565000000000000000000000000000000000000000000000000000000000000606482015260840161090e565b606082471015612259576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c0000000000000000000000000000000000000000000000000000606482015260840161090e565b6000808673ffffffffffffffffffffffffffffffffffffffff1685876040516122829190612afe565b60006040518083038185875af1925050503d80600081146122bf576040519150601f19603f3d011682016040523d82523d6000602084013e6122c4565b606091505b50915091506122d5878383876123cf565b979650505050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561231757506000905060036123c6565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561236b573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166123bf576000600192509250506123c6565b9150600090505b94509492505050565b6060831561246557825160000361245e5773ffffffffffffffffffffffffffffffffffffffff85163b61245e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161090e565b50816109a6565b6109a6838381511561247a5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161090e9190612b1a565b6000602082840312156124c057600080fd5b813563ffffffff811681146124d457600080fd5b9392505050565b73ffffffffffffffffffffffffffffffffffffffff811681146106ee57600080fd5b60006020828403121561250f57600080fd5b81356124d4816124db565b6000806040838503121561252d57600080fd5b8235612538816124db565b946020939093013593505050565b6000610160828403121561255957600080fd5b50919050565b803565ffffffffffff8116811461257557600080fd5b919050565b600080600080600060a0868803121561259257600080fd5b853567ffffffffffffffff8111156125a957600080fd5b6125b588828901612546565b9550506125c46020870161255f565b93506125d26040870161255f565b925060608601356125e2816124db565b949793965091946080013592915050565b80151581146106ee57600080fd5b6000806040838503121561261457600080fd5b823561261f816124db565b9150602083013561262f816125f3565b809150509250929050565b6000806040838503121561264d57600080fd5b8235612658816124db565b9150602083013561262f816124db565b6000806000806080858703121561267e57600080fd5b8435612689816124db565b9350602085013592506040850135915060608501356126a7816124db565b939692955090935050565b60008083601f8401126126c457600080fd5b50813567ffffffffffffffff8111156126dc57600080fd5b60208301915083602082850101111561200d57600080fd5b6000806020838503121561270757600080fd5b823567ffffffffffffffff81111561271e57600080fd5b61272a858286016126b2565b90969095509350505050565b600065ffffffffffff808916835280881660208401525073ffffffffffffffffffffffffffffffffffffffff8616604083015284606083015260a060808301528260a0830152828460c0840137600060c0848401015260c07fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8501168301019050979650505050505050565b600080600080606085870312156127da57600080fd5b8435600381106127e957600080fd5b9350602085013567ffffffffffffffff81111561280557600080fd5b612811878288016126b2565b9598909750949560400135949350505050565b60008060006060848603121561283957600080fd5b833567ffffffffffffffff81111561285057600080fd5b61285c86828701612546565b9660208601359650604090950135949350505050565b60005b8381101561288d578181015183820152602001612875565b50506000910152565b600081518084526128ae816020860160208601612872565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6040815260006128f36040830185612896565b90508260208301529392505050565b60e08152600061291560e083018a612896565b60208301989098525073ffffffffffffffffffffffffffffffffffffffff958616604082015265ffffffffffff948516606082015292909316608083015290921660a083015260c090910152919050565b60006020828403121561297857600080fd5b5051919050565b60006020828403121561299157600080fd5b81516124d4816124db565b80820180821115611f82577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600080858511156129e657600080fd5b838611156129f357600080fd5b5050820193919092039150565b60008060008060808587031215612a1657600080fd5b612a1f8561255f565b9350612a2d6020860161255f565b92506040850135612a3d816124db565b9396929550929360600135925050565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1843603018112612a8257600080fd5b83018035915067ffffffffffffffff821115612a9d57600080fd5b60200191503681900382131561200d57600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600060208284031215612af357600080fd5b81516124d4816125f3565b60008251612b10818460208701612872565b9190910192915050565b6020815260006124d4602083018461289656fea264697066735822122032f2af13062be0d58c066cfd4f992bf3d72eac8be5fa85b797d71fc099b0c9fc64736f6c63430008170033";

type LuminexTokenPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LuminexTokenPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LuminexTokenPaymaster__factory extends ContractFactory {
  constructor(...args: LuminexTokenPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: string,
    _owner: string,
    _wrappedNative: string,
    _accountFactory: string,
    overrides?: Overrides & { from?: string }
  ): Promise<LuminexTokenPaymaster> {
    return super.deploy(
      _entryPoint,
      _owner,
      _wrappedNative,
      _accountFactory,
      overrides || {}
    ) as Promise<LuminexTokenPaymaster>;
  }

  override getDeployTransaction(
    _entryPoint: string,
    _owner: string,
    _wrappedNative: string,
    _accountFactory: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _owner,
      _wrappedNative,
      _accountFactory,
      overrides || {}
    );
  }

  override attach(address: string): LuminexTokenPaymaster {
    return super.attach(address) as LuminexTokenPaymaster;
  }

  override connect(signer: Signer): LuminexTokenPaymaster__factory {
    return super.connect(signer) as LuminexTokenPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;

  static createInterface(): LuminexTokenPaymasterInterface {
    return new utils.Interface(_abi) as LuminexTokenPaymasterInterface;
  }

  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LuminexTokenPaymaster {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as LuminexTokenPaymaster;
  }
}