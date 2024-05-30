import React, { useContext } from "react";
import CartItems from "./CartItems";
import { ItemContext } from "../store/ItemContextProvider";
import EmptyList from "./EmptyList";

// const fruits = [
//   {
//     id: 1,
//     name: "Banana",
//     price: 10.98,
//     description: "fresh banana from myanmar",
//     quantity: 5,
//   },
//   {
//     id: 2,
//     name: "Apple",
//     price: 11,
//     description: "fresh banana from thai",
//     quantity: 2,
//   },

//   {
//     id: 3,
//     name: "Mango",
//     price: 8.5,
//     description: "fresh banana from chinese",
//     quantity: 4,
//   },
//   {
//     id: 4,
//     name: "Kiwi",
//     price: 15.8,
//     description: "fresh banana from myanmar",
//     quantity: 2,
//   },
//   {
//     id: 5,
//     name: "Orange",
//     price: 11.5,
//     description: "fresh banana from myanmar",
//     quantity: 5,
//   },
// ];

const Cart = ({ showCardHandler }) => {
  const { items, totalAmount } = useContext(ItemContext);
  const closeCardBox = () => {
    showCardHandler();
  };
  return (
    <div className=" w-[400px] bg-white shadow-xl h-auto absolute z-50 right-10 top-20 rounded-lg">
      <div className="m-5 space-y-4">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold">Your Items</h1>
          <span
            onClick={closeCardBox}
            className="cursor-pointer hover:scale-90 duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-7 pointer-events-none border rounded-md bg-slate-200 font-bold "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>

        <div className="space-y-5 h-[300px] overflow-y-scroll">
          {items.length < 1 ? (
            <EmptyList />
          ) : (
            items.map((item) => <CartItems key={item.id} item={item} />)
          )}
        </div>
      </div>

      <div className="m-5">
        <hr className="h-[2px] bg-slate-800" />

        <div className="flex justify-between items-center mt-3">
          <h1 className="text-lg font-semibold">Total Price</h1>
          <span className="text-lg font-mono">${totalAmount.toFixed(2)}</span>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          {items.length < 1 ? (
            <></>
          ) : (
            <button
              onClick={alert("Order Completed")}
              className="border text-slate-100 bg-slate-800 border-slate-800 rounded-lg px-4 py-1 hover:bg-slate-100   hover:text-slate-900 duration-200"
            >
              Order
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
