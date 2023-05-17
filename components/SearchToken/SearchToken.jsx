import React, { useState } from "react";
import Image from "next/image";

//internal imports
import style from "./SearchToken.module.css";
import images from "../../assets";

const SearchToken = ({ setOpenToken, tokens, tokenData }) => {
  const [active, setActive] = useState(1);

  const coin = [
    { img: images.ether, name: "ETH" },
    { img: images.ether, name: "DAI" },
    { img: images.ether, name: "DOGE" },
    { img: images.ether, name: "SHIB" },
    { img: images.ether, name: "UNI" },
  ];

  return (
    <div className={style.SearchToken}>
      <div className={style.SearchToken_box}>
        <div className={style.SearchToken_box_heading}>
          <h4>Select a token</h4>
          <Image
            src={images.close}
            alt="img"
            width={50}
            height={50}
            onClick={() => setOpenToken(false)}
          />
        </div>

        <div className={style.SearchToken_box_search}>
          <div className={style.SearchToken_box_search_img}>
            <Image src={images.search} alt="img" width={20} height={20} />
          </div>
          <input type="text" placeholder="Search name and paste the address" />
        </div>

        <div className={style.SearchToken_box_token}>
          {coin.map((el, i) => (
            <span
              key={i + 1}
              className={active == i + 1 ? `${style.active}` : ""}
              onClick={() => (
                setActive(i + 1), tokens({ name: el.name, image: el.img })
              )}
            >
              <Image
                src={el.img || images.ether}
                alt="image"
                width={30}
                height={30}
              />
              {el.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchToken;
