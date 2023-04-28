const hre = require("hardhat");

async function main() {
  //ERC20 BOO TOKEN
  const BooToken = await hre.ethers.getContractFactory("BooToken");
  const booToken = await BooToken.deploy();
  await booToken.deployed();
  console.log(`Contract deployed to ${booToken.address}`);

  //ERC20 LIFE TOKEN
  const LifeToken = await hre.ethers.getContractFactory("LifeToken");
  const lifeToken = await LifeToken.deploy();
  await lifeToken.deployed();
  console.log(`Contract deployed to ${lifeToken.address}`);

  //SingleSwapToken
  const SingleSwapToken = await hre.ethers.getContractFactory(
    "SingleSwapToken"
  );
  const singleSwapToken = await SingleSwapToken.deploy();
  await singleSwapToken.deployed();
  console.log(`Contract deployed to ${singleSwapToken.address}`);

  //SwapMultiHop
  const SwapMultiHop = await hre.ethers.getContractFactory("SwapMultiHop");
  const swapMultiHop = await SwapMultiHop.deploy();
  await swapMultiHop.deployed();
  console.log(`Contract deployed to ${swapMultiHop.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
