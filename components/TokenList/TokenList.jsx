import React from "react";
import Image from "next/image";

//internal import
import style from "./TokenList.module.css";
import images from "../../assets";

const TokenList = ({ tokenDate, setOpenTokenBox }) => {
  const data = [1, 2, 3, 4, 5, 6, 7];

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

      {data.map((el, i) => (
        <div className={style.TokenList_box}>
          <div className={style.TokenList_box_info}>
            <p className={style.TokenList_box_info_symbol}>HEY</p>
            <p>
              <span>34</span>GOLD COIN
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TokenList;
