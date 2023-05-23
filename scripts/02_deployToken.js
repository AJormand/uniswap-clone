const { ethers } = require("hardhat");

async function main() {
  const [owner, signer2] = await ethers.getSigners();

  Token1 = await ethers.getContractFactory("Token1", owner);
  token1 = await Token1.deploy();

  Token2 = await ethers.getContractFactory("Token2", owner);
  token2 = await Token2.deploy();

  Token3 = await ethers.getContractFactory("Token3", owner);
  token3 = await Token3.deploy();

  //   await token1
  //     .connect(owner)
  //     .mint(signer2.address, ethers.utils.parseEther("100000"));

  //   await token2
  //     .connect(owner)
  //     .mint(signer2.address, ethers.utils.parseEther("100000"));

  //   await token3
  //     .connect(owner)
  //     .mint(signer2.address, ethers.utils.parseEther("100000"));

  console.log("Token1Address=", `'${token1.address}'`);
  console.log("Token2Address=", `'${token2.address}'`);
  console.log("Token3Address=", `'${token3.address}'`);
}

// npx hardhat run scripts/deployToken.js --network localhost

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
