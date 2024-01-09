import React from "react";
// import Demo from "./Component/Demo";
// import Usestatname from "./Component/Usestatname";
import HomeNavbar from "./Component/HomeNavbar";

import Fakeapi from "./Component/Fakeapi";
import Cards from "./Component/Cards";
import { Mycontext } from "./Component/useContext";
import Footer from "./Component/Footer";
const App = () => {
  const name = "Zarban";
  return (
    <>
      <HomeNavbar />
      <Mycontext.Provider value={{ name }}>
        <Fakeapi />
        {<Cards />}
        {/* <Demo /> */}
      </Mycontext.Provider>
      <Footer />
    </>
  );
};

export default App;
