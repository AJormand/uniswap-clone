const { expect } = require("chai");
const { ethers } = require("hardhat");

const WETH9 = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const USDC = "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48";

describe("SingleSwapToken", () => {
  let singleSwapToken;
  let accounts;
  let weth;
  let dai;
  let usdc;

  before(async () => {
    accounts = await ethers.getSigners(1);
    const SingleSwapToken = await ethers.getContractFactory("SingleSwapToken");
    singleSwapToken = await SingleSwapToken.deploy();
    await singleSwapToken.deployed();

    weth = await ethers.getContractAt("IWETH", WETH9);
    dai = await ethers.getContractAt("IERC20", DAI);
    usdc = await ethers.getContractAt("IERC20", USDC);

    // console.log(weth);
    // console.log(dai);
    // console.log(usdc);
    // console.log(accounts);
    // console.log(singleSwapToken);
  });

  it("SwapexactInputSingle", async () => {
    const amountIn = 10n ** 18n; //1 ether

    //lets deposit WETH
    await weth.deposit({ value: amountIn });
    await weth.approve(singleSwapToken.address, amountIn);

    //swap
    await singleSwapToken.swapExactInputSingle(amountIn);
    console.log(
      "DAI balance:",
      (await dai.balanceOf(accounts[0].address)).toString() / 10 ** 18
    );
  });

  it("swapExactOutputSingle", async () => {
    const wethAmountInMax = 10n ** 18n;
    const daiAmountOut = 100n * 10n ** 18n;

    //deposti weth
    await weth.deposit({ value: wethAmountInMax });
    await weth.approve(singleSwapToken.address, wethAmountInMax);

    //swap
    await singleSwapToken.swapExactOutputSingle(
      WETH9,
      DAI,
      daiAmountOut,
      wethAmountInMax
    );
    console.log(accounts[0].address);
    console.log("Dai balance: ", await dai.balanceOf(accounts[0].address));
  });
});
