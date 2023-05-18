import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";

//ERC20 BOO TOKEN
export const BooTokenAddress = "0x1c39BA375faB6a9f6E0c01B9F49d488e101C2011";
export const BooTokenABI = booToken.abi;

//ERC20 LIFE TOKEN
export const LifeTokenAddress = "0xb04CB6c52E73CF3e2753776030CE85a36549c9C2";
export const LifeTokenABI = lifeToken.abi;

//SingleSwapToken
export const SingleSwapTokenAddress =
  "0x5E5713a0d915701F464DEbb66015adD62B2e6AE9";
export const SingleSwapTokenABI = singleSwapToken.abi;

//SwapMultiHop
export const SwapMultiHopAddress = "0xa195ACcEB1945163160CD5703Ed43E4f78176a54";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
export const IWETHABI = IWETH.abi;
