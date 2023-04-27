require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env.local" });

const NEXT_PUBLIC_ALCHEMY_MAINNET_URL =
  process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_URL;

console.log(NEXT_PUBLIC_ALCHEMY_MAINNET_URL);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337, // for local development
      forking: {
        url: NEXT_PUBLIC_ALCHEMY_MAINNET_URL,
      },
    },
  },
};
