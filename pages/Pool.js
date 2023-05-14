import React from "react";
import Image from "next/image";

//internal imports
import images from "../assets";
import style from "../styles/Pools.module.css";

import { PoolAdd, PoolConnect } from "@/components";

const Pool = () => {
  return (
    <div className={style.Pool}>
      <PoolAdd />
      {/* <PoolConnect /> */}
    </div>
  );
};

export default Pool;
