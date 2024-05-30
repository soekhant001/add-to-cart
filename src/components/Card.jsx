import React, { useContext, useState } from "react";
import { ItemContext } from "../store/ItemContextProvider";

const Card = ({ fruit: { id, name, price, description } }) => {
  const { addItem } = useContext(ItemContext);
  const [currentAmount, setCurrentAmount] = useState(1);
  const currentAmountNum = +currentAmount;
  const addToCartHandler = () => {
    if (currentAmountNum < 1 || currentAmountNum > 5) {
        alert("Please Enter a valid amount")
        return false;
    }
    addItem({
      id,
      name,
      price,
      amount: currentAmountNum,
    });
  };

  return (
    <div className="w-full md:w-[350px] lg:w-[300px] xl:w-[400px]">
      <div className="border-2 border-slate-500 rounded-lg px-6 py-4 bg-neutral-100 space-y-2 ">
        <div className="flex justify-between items-center ">
          <h1 className="text-xl font-bold">
            {name}
            <span className="font-mono font-normal">(${price})</span>
          </h1>
          <input
            type="number"
            className="border border-slate-400 rounded-md w-28 px-4 py-2"
            value={currentAmount}
            onChange={(e) => {
              setCurrentAmount(e.target.value);
            }}
          />
        </div>
        <p className="text-lg font-medium">{description}</p>
        <button
          onClick={addToCartHandler}
          className="border text-slate-900 border-slate-800 rounded-lg px-6 py-2   hover:bg-slate-900 hover:text-slate-100 duration-200"
        >
          +ADD
        </button>
      </div>
    </div>
  );
};

export default Card;
