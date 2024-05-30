import React, { useContext } from "react";
import { ItemContext } from "../store/ItemContextProvider";

const CartItems = ({ item: { id, name, price, amount } }) => {
  const { addItem, removeItem } = useContext(ItemContext);
  const decrementAmountHandler = () => {
    removeItem(id);
  };
  const incrementAmountHandler = () => {
    addItem({
      id,
      name,
      price,
      amount: 1,
    });
  };

  return (
    <div className="">
      <div className="border-2 border-slate-500 rounded-lg px-4 py-2 bg-neutral-100 space-y-1">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">
            {name}
            <span className="font-mono font-normal">(${price})</span>
          </h1>
        </div>
        <div className="flex justify-between items-center gap-3 w-[100px] ">
          <button
            className="border border-slate-300 px-2 py-1 rounded-lg bg-neutral-200 font-bold"
            onClick={decrementAmountHandler}
          >
            -
          </button>
          <span className="-mr-2">{amount}</span>
          <button
            className="border border-slate-300 px-2 py-1 rounded-lg bg-neutral-200 font-bold"
            onClick={incrementAmountHandler}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
