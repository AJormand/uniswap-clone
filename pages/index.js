import React, { useState, useEffect, useContext } from "react";

//internal imports
import { HeroSection } from "@/components";

const index = () => {
  return (
    <div>
      <HeroSection accounts="hey" tokenData="DATA" />
    </div>
  );
};

export default index;
