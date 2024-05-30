import React, { useContext } from "react";
import { ItemContext } from "../store/ItemContextProvider";

const Nav = ({ showCardHandler }) => {
  const { items } = useContext(ItemContext);

  const totalItems = items.reduce((initialValue, item) => {
    return initialValue + item.amount;
  }, 0);

  const showCard = () => {
    showCardHandler();
  };

  return (
    <nav className="flex justify-between items-center border border-t-0 border-r-0 border-l-0 pb-4 border-slate-800">
      <h1 className="text-2xl font-bold">SHOPPING</h1>
      <button
        onClick={showCard}
        className="border text-slate-100 bg-slate-800 border-slate-800 rounded-lg px-6 py-2 hover:bg-slate-100 hover:text-slate-900 duration-200"
      >
        Cart<span> ({totalItems})</span>
      </button>
    </nav>
  );
};

export default Nav;
