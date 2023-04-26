import React, { useState, useEffect } from "react";
import Image from "next/image";

//internal imports
import style from "./Model.module.css";
import images from "../../assets";

const Model = ({ setOpenModel, connectWallet }) => {
  const walletMenu = ["MetaMask", "Coinbase", "Wallet", "WalletConnect"];

  return (
    <div className={style.Model}>
      <div className={style.Model_box}>
        <p>Connect a wallet</p>
        <div className={style.Model_box_heading_img}>
          <Image
            src={images.close}
            alt="logo"
            width={50}
            height={50}
            onClick={() => setOpenModel(false)}
          />
        </div>

        <div className={style.Model_box_wallet}>
          {walletMenu.map((el, i) => (
            <p key={i + 1} onClick={() => connectWallet()}>
              {el}
            </p>
          ))}
        </div>

        <p className={style.Model_box_para}>
          By connecting a wallet, you agreee to Uniswap Labs' <br /> Terms of
          Service and consent to its Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Model;
