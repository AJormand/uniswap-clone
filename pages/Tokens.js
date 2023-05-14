import React, { useState, useEffect } from "react";
import Image from "next/image";

//internal import
import style from "../styles/Tokens.module.css";
import images from "../assets";
import { AllTokens } from "../components/index";

const Tokens = () => {
  const [allTokenList, setAllTokenList] = useState([
    {
      number: 1,
      image: images.etherlogo,
      name: "Ether",
      symbol: "ETH",
      price: "12,345$",
      change: "+234",
      tvl: "$7783.5M",
      volume: "716.5M",
    },
    {
      number: 2,
      image: images.etherlogo,
      name: "USDC coin",
      symbol: "USDC",
      price: "12,345$",
      change: "+234",
      tvl: "$7783.5M",
      volume: "716.5M",
    },
    {
      number: 3,
      image: images.etherlogo,
      name: "USDC coin",
      symbol: "USDC",
      price: "12,345$",
      change: "+234",
      tvl: "$7783.5M",
      volume: "716.5M",
    },
    {
      number: 3,
      image: images.etherlogo,
      name: "Uniswap",
      symbol: "UNI",
      price: "12,345$",
      change: "+234",
      tvl: "$7783.5M",
      volume: "716.5M",
    },
  ]);

  const [copyAllTokenList, setCopyAllTokenList] = useState(allTokenList);
  const [search, setSearch] = useState("");
  const [searchItem, setSearchItem] = useState(search);

  const onHnadleSearch = (value) => {
    const filteredTokens = allTokenList.filter(({ name }) =>
      name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    if (filteredTokens.length === 0) {
      setAllTokenList(copyAllTokenList);
    } else {
      setAllTokenList(filteredTokens);
    }
  };

  const onClearSearch = () => {
    if (allTokenList.length && copyAllTokenList.length) {
      setAllTokenList(copyAllTokenList);
    }
  };

  useEffect(() => {
    console.log(searchItem);
    const timer = setTimeout(() => setSearch(searchItem), 1000);
    console.log(search);
    return () => {
      clearTimeout(timer);
    };
  }, [searchItem]);

  useEffect(() => {
    if (search) {
      onHnadleSearch(search);
    } else {
      onClearSearch();
    }
  }, [search]);

  return (
    <div className={style.Tokens}>
      <div className={style.Tokens_box}>
        <h2>Top tokens on Uniswap</h2>
        <div className={style.Tokens_box_header}>
          <div className={style.Tokens_box_ethereum}>
            <p>
              <Image
                src={images.etherlogo}
                alt="ether"
                width={20}
                height={20}
              />
            </p>
            <p>Ethereum</p>
          </div>
          <div className={style.Tokens_box_search}>
            <p>
              <Image src={images.search} alt="image" width={20} height={20} />
            </p>
            <input
              type="text"
              placeholder="Filter tokens"
              onChange={(e) => setSearchItem(e.target.value)}
              value={searchItem}
            />
          </div>
        </div>

        <AllTokens allTokenList={allTokenList} />
      </div>
    </div>
  );
};

export default Tokens;
