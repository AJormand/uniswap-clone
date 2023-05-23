//Token addresses
Token1Address = "0x9d136eEa063eDE5418A6BC7bEafF009bBb6CFa70";
Token2Address = "0x687bB6c57915aa2529EfC7D2a26668855e022fAE";
Token3Address = "0x49149a233de6E4cD6835971506F47EE5862289c1";

//Uniswap contract addresses
wethAddress = "0x5E5713a0d915701F464DEbb66015adD62B2e6AE9";
factoryAddress = "0x97fd63D049089cd70D9D139ccf9338c81372DE68";
swapRouterAddress = "0xC0BF43A4Ca27e0976195E6661b099742f10507e5";
nftDescriptorAddress = "0x43cA9bAe8dF108684E5EAaA720C25e1b32B0A075";
positionDescriptorAddress = "0x9D3DA37d36BB0B825CD319ed129c2872b893f538";
positionManagerAddress = "0x59C4e2c6a6dC27c259D6d067a039c831e1ff4947";

const artifacts = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
};

const { Contract, BigNumber } = require("ethers");
const bn = require("bignumber.js");
const { ethers } = require("hardhat");
bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const MAINNET_URL = process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_URL;

const provider = new ethers.providers.JsonRpcProvider(MAINNET_URL);

function encodePriceSqrt(reserve1, reserve0) {
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
}

const nonfungiblePositionManager = new Contract(
  positionManagerAddress,
  artifacts.NonfungiblePositionManager.abi,
  provider
);

const factory = new Contract(
  factoryAddress,
  artifacts.UniswapV3Factory.abi,
  provider
);

async function deployPool(token0, token1, fee, price) {
  const [owner] = await ethers.getSigners();
  await nonfungiblePositionManager
    .connect(owner)
    .createAndInitializePoolIfNecessary(token0, token1, fee, price, {
      gasLimit: 5000000,
    });
  const poolAddress = await factory.connect(owner).getPool(token0, token1, fee);
  return poolAddress;
}

async function main() {
  const pool12 = await deployPool(
    Token1Address,
    Token2Address,
    500,
    encodePriceSqrt(1, 1)
  );
  console.log("pool12="`'${pool12}'`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
