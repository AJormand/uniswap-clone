import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";

//internal import
import style from "./Navbar.module.css";
import images from "../../assets";
import { Model, TokenList } from "../index";
import { SwapTokenContext } from "@/Context/SwapContext";

const Navbar = () => {
  const { ether, account, networkConnected, connectWallet, tokenData } =
    useContext(SwapTokenContext);
  const menuItems = [
    { name: "Swap", link: "/" },
    { name: "Tokens", link: "/" },
    { name: "Pools", link: "/" },
  ];
  const [openModel, setOpenModel] = useState(false);
  const [openTokenBox, setOpenTokenBox] = useState(false);
  //const [account, setAccount] = useState(false);

  return (
    <div className={style.NavBar}>
      <div className={style.NavBar_box}>
        <div className={style.NavBar_box_left}>
          {/* //LOGO IMAGE */}
          <div className={style.NavBar_box_left_img}>
            <Image src={images.uniswap} alt="logo" width={50} height={50} />
          </div>

          {/* //MENU ITEMS */}
          <div className={style.NavBar_box_left_menu}>
            {menuItems.map((el, i) => (
              <Link key={i + 1} href={{ pathname: `${el.name}` }}>
                <p className={style.NavBar_box_left_menu_item}> {el.name}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* //MIDDLE SECTION */}
        <div className={style.NavBar_box_middle}>
          <div className={style.NavBar_box_middle_search}>
            <div className={style.NavBar_box_middle_search_img}>
              <Image src={images.search} alt="search" width={20} height={20} />
            </div>
            {/* //INPUT SECTION */}
            <input type="text" placeholder="Search Tokens" />
          </div>
        </div>

        {/* //RIGHT SECTION */}
        <div className={style.NavBar_box_right}>
          <div className={style.NavBar_box_right_box}>
            <div className={style.NavBar_box_right_box_img}>
              <Image src={images.ether} alt="Network" height={30} width={30} />
            </div>
            <p>Network Name</p>
          </div>

          {!account ? (
            <button
              onClick={() => {
                setOpenModel(true);
              }}
            >
              Connect
            </button>
          ) : (
            <button
              onClick={() => {
                setOpenTokenBox(true);
              }}
            >
              {account.slice(0, 4)}...{account.slice(-4)}
            </button>
          )}

          {openModel && (
            <Model
              setOpenModel={setOpenModel}
              setConnectWallet={connectWallet}
            />
          )}
        </div>
      </div>

      {/* //TOKENLIST COMPONENT */}
      {openTokenBox && (
        <TokenList tokenData={tokenData} setOpenTokenBox={setOpenTokenBox} />
      )}
    </div>
  );
};

export default Navbar;
