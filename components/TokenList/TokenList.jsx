import React from "react";
import Image from "next/image";

//internal import
import style from "./TokenList.module.css";
import images from "../../assets";

const TokenList = ({ tokenData, setOpenTokenBox }) => {
  let tokenList = [];
  for (let i = 0; i < tokenData.length; i++) {
    if (i % 2 == 1) tokenList.push(tokenData[i]);
  }

  return (
    <div className={style.TokenList}>
      <p
        className={style.TokenList_close}
        onClick={() => setOpenTokenBox(false)}
      >
        <Image src={images.close} alt="close" width={50} height={50} />
      </p>
      <div className={style.TokenList_title}>
        <h2>Your Token List</h2>
      </div>

      {tokenList.map((el, i) => (
        <div className={style.TokenList_box}>
          <div className={style.TokenList_box_info}>
            <p className={style.TokenList_box_info_symbol}>{el.name}</p>
            <p>
              <span>{el.tokenBalance}</span>
              {el.symbol}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;
