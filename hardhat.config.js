require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: "./.env.local" });

const NEXT_PUBLIC_ALCHEMY_MAINNET_URL =
  process.env.NEXT_PUBLIC_ALCHEMY_MAINNET_URL;

console.log(NEXT_PUBLIC_ALCHEMY_MAINNET_URL);

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.7.6",
        settings: {
          evmVersion: "istanbul",
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      chainId: 1337, // for local development
      forking: {
        url: NEXT_PUBLIC_ALCHEMY_MAINNET_URL,
      },
    },
  },
};
