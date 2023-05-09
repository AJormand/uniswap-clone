import React, { useState, useContext } from "react";
import Image from "next/image";

//internal import
import style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";

//context
import { SwapTokenContext } from "@/Context/SwapContext";

const HeroSection = ({ tokenData }) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  const { singleSwapToken, connectWallet, account, ether, dai } =
    useContext(SwapTokenContext);

  //TOKEN1
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
  });

  //TOKEN2
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
  });

  return (
    <div className={style.HeroSection}>
      <div className={style.HeroSection_box}>
        <div className={style.HeroSection_box_heding}>
          <p>Swap</p>
          <div className={style.HeroSection_box_heding_img}>
            <Image
              src={images.close}
              alt="image"
              width={50}
              height={50}
              onClick={() => setOpenSetting(true)}
            />
          </div>
        </div>

        <div className={style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => setOpenToken(true)}>
            <Image
              src={tokenOne.image || images.etherlogo}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenOne.name || "ETH"}
            <small>{ether.slice(0, 7)}</small>
          </button>
        </div>

        <div className={style.HeroSection_box_input}>
          <input type="text" placeholder="0" />
          <button onClick={() => setOpenTokenTwo(true)}>
            <Image
              src={tokenTwo.image || images.etherlogo}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenTwo.name || "ETH"}
            <small>{dai.slice(0, 7)}</small>
          </button>
        </div>

        {!account ? (
          <button
            className={style.HeroSection_box_btn}
            onClick={() => connectWallet()}
          >
            Connect Wallet
          </button>
        ) : (
          <button
            className={style.HeroSection_box_btn}
            onClick={() => singleSwapToken()}
          >
            Swap
          </button>
        )}
      </div>

      {openSetting && <Token setOpenSetting={setOpenSetting} />}

      {openToken && (
        <SearchToken
          setOpenToken={setOpenToken}
          tokens={setTokenOne}
          tokenData={tokenData}
        />
      )}

      {openTokenTwo && (
        <SearchToken
          setOpenToken={setOpenTokenTwo}
          tokens={setTokenTwo}
          tokenData={tokenData}
        />
      )}
    </div>
  );
};

export default HeroSection;
