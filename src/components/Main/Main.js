import React, { useContext } from "react";
import { useEffect } from "react";
import { navContext } from "../App";
import HomeMain from "./HomeMain";
import SignHead from "./SignHead";
const Main = () => {
  const {isNav,setIsNav}=useContext(navContext)
  useEffect(()=>{
    if(isNav){setIsNav(false)}
  })
  return (
    <div className="wrapper">
      <SignHead/>
      <HomeMain/>
    </div>
  );
};
export default Main;
