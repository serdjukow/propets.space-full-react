import React, { useState } from "react";
import Pages from "../Layouts/Pages";
import Head from "./Hedars/Head";
import NavBar from "./NavBar";
import LogIn from "./Profile/LogIn";

export const navContext = React.createContext();

const App = () => {
  const [isNav, setIsNav] = useState(false);
  const [isLostFound, setIsLostFound] = useState(false);
  const [isChangeActinve, setIsChangeActive] = useState(false);
  const renderNavigation = () => {
    return (
      <>
        <Head />
        <main className="page home-page">
          <NavBar />
          <Pages />
          <LogIn />
        </main>
      </>
    );
  };

  return (
    <navContext.Provider
      value={{
        isNav,
        setIsNav,
        isLostFound,
        setIsLostFound,
        isChangeActinve,
        setIsChangeActive,
      }}
    >
      <div className="wrapper">{!isNav ? <Pages /> : renderNavigation()}</div>
    </navContext.Provider>
  );
};

export default App;
