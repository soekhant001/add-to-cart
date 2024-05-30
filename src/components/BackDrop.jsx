import React, { useContext } from "react";
import Cart from "./Cart";

const BackDrop = ({ isOpen, showCardHandler }) => {
  return (
    <>
      {isOpen && (
        <>
          <section className="w-full h-screen  backdrop-blur-sm bg-white/10 absolute z-10 top-0 left-0" />
          {isOpen && <Cart showCardHandler={showCardHandler} />}
        </>
      )}
    </>
  );
};

export default BackDrop;
