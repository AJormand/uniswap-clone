import React from "react";
import Image from "next/image";

//internal imports
import style from "./AllTokens.module.css";
import images from "../../assets";

const AllTokens = ({ allTokenList }) => {
  return (
    <div className={style.AllTokens}>
      <div className={style.AllTokens_box}>
        <div className={style.AllTokens_box_header}>
          <p className={style.hide}>#</p>
          <p>Token name</p>
          <p>Token price</p>
          <p className={style.hide}>Change</p>
          <p className={style.hide}>
            TVL{" "}
            <small>
              <Image src={images.question} alt="img" width={15} height={15} />
            </small>{" "}
          </p>
          <p className={style.hide}>
            <small>
              <Image src={images.arrowPrice} alt="img" width={15} height={15} />
            </small>{" "}
            Volume{" "}
            <small>
              <Image src={images.quest} alt="img" width={15} height={15} />
            </small>
          </p>
        </div>

        {allTokenList.map((el, i) => (
          <div className={style.AllTokens_box_list} key={i}>
            <p className={style.hide}>{el.number}</p>
            <p className={style.AllTokens_box_list_para}>
              <small>
                <Image src={el.image} alt="logo" width={25} height={25} />
              </small>
              <small>{el.name}</small>
              <small>{el.symbol}</small>
            </p>
            <p>{el.price}</p>
            <p className={style.hide}>{el.change}</p>
            <p className={style.hide}>{el.volume}</p>
            <p className={style.hide}>{el.volume}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTokens;
