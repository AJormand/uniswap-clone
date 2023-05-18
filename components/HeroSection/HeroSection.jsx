import React, { useState, useContext } from "react";
import Image from "next/image";

//internal import
import style from "./HeroSection.module.css";
import images from "../../assets";
import { Token, SearchToken } from "../index";

//context
import { SwapTokenContext } from "@/Context/SwapContext";

const HeroSection = ({}) => {
  const [openSetting, setOpenSetting] = useState(false);
  const [openToken, setOpenToken] = useState(false);
  const [openTokenTwo, setOpenTokenTwo] = useState(false);

  const [tokenSwapOutput, setTokenSwapOutput] = useState(0);
  const [poolMessage, setPoolMessage] = useState("");
  const [search, setSearch] = useState(false);
  const [swapAmount, setSwapAmount] = useState(0);

  const {
    singleSwapToken,
    connectWallet,
    account,
    ether,
    dai,
    tokenData,
    getPrice,
    swapUpdatePrice,
  } = useContext(SwapTokenContext);

  //TOKEN1
  const [tokenOne, setTokenOne] = useState({
    name: "",
    image: "",
    symbol: "",
    tokenBalance: "",
    tokenAddress: "",
  });

  //TOKEN2
  const [tokenTwo, setTokenTwo] = useState({
    name: "",
    image: "",
    symbol: "",
    tokenBalance: "",
    tokenAddress: "",
  });

  const callOutPut = async (value) => {
    const yourAccount = "0x97f991971a37D4Ca58064e6a98FC563F03A71E5c";
    const deadline = 10;
    const slippageAmount = 25;
    const data = await swapUpdatePrice(
      value,
      slippageAmount,
      deadline,
      yourAccount
    );
    setTokenSwapOutput(data[1]);
    setSearch(false);

    const poolAddress = "0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8";
    const poolData = await getPrice(value, poolAddress);
    const message = `${value} ${poolData[2]} = ${poolData[0]} ${poolData[1]}`;
    setPoolMessage(message);
  };

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
          <input
            type="text"
            placeholder="0"
            onChange={(e) => (
              callOutPut(e.target.value),
              setSwapAmount(e.target.value),
              setSearch(true)
            )}
          />
          <button onClick={() => setOpenToken(true)}>
            <Image
              src={tokenOne.image || images.etherlogo}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenOne.symbol || "ETH"}
            <small>{tokenOne.tokenBalance.slice(0, 7)}</small>
          </button>
        </div>

        <div className={style.HeroSection_box_input}>
          {/* <input type="text" placeholder="0" /> */}
          <p>
            {search ? (
              <Image
                src={images.loading || images.etherlogo}
                width={100}
                height={40}
                alt="loading"
              />
            ) : (
              { tokenSwapOutput }
            )}
          </p>
          <button onClick={() => setOpenTokenTwo(true)}>
            <Image
              src={tokenTwo.image || images.etherlogo}
              width={20}
              height={20}
              alt="ether"
            />
            {tokenTwo.symbol || "ETH"}
            <small>{tokenTwo.tokenBalance.slice(0, 7)}</small>
          </button>
        </div>

        {search ? (
          <Image
            src={images.loading || images.etherlogo}
            width={100}
            height={40}
            alt="loading"
          />
        ) : (
          { poolMessage }
        )}

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
