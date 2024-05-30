import React, { createContext, useReducer } from "react";

const initialState = {
  items: [],
  totalAmount: 0,
};

const itemReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existItem = state.items[existItemIndex];

    let updateItem;
    if (existItem) {
      const updateEqualItem = {
        ...existItem,
        amount: existItem.amount + action.item.amount,
      };
      updateItem = [...state.items];
      updateItem[existItemIndex] = updateEqualItem;
    } else {
      updateItem = [...state.items, action.item];
      // updateItem = state.items.concat(action.item);
    }

    return {
      items: updateItem,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const removeItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const removeItem = state.items[removeItemIndex];

    const updateTotalAmount = state.totalAmount - removeItem.price;
    let updateItem;
    if (removeItem.amount === 1) {
      updateItem = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItemQuantity = { ...removeItem, amount: removeItem.amount - 1 };
      updateItem = [...state.items];
      updateItem[removeItemIndex] = updateItemQuantity;
    }
    return {
      items: updateItem,
      totalAmount: updateTotalAmount,
    };
  }
  return initialState;
};

export const ItemContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

const ItemContextProvider = ({ children }) => {
  const [itemState, itemDispatch] = useReducer(itemReducer, initialState);

  const addItemHandler = (item) => {
    itemDispatch({ type: "ADD_ITEM", item });
  };

  const removeItemHandler = (id) => {
    itemDispatch({ type: "REMOVE_ITEM", id });
  };
  const itemData = {
    items: itemState.items,
    totalAmount: itemState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <ItemContext.Provider value={itemData}>{children}</ItemContext.Provider>
  );
};

export default ItemContextProvider;
