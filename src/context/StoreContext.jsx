import { createContext, useEffect, useState } from "react";
import { rest_info } from "../assets/resCardsItem";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartIteams, setCartIteams] = useState({});

  const addIteam = (iteamID) => {
    if (!cartIteams[iteamID]) {
      setCartIteams((prev) => ({ ...prev, [iteamID]: 1 }));
    } else {
      setCartIteams((prev) => ({ ...prev, [iteamID]: prev[iteamID] + 1 }));
    }
  };

  const removeIteam = (iteamID) => {
    setCartIteams((prev) => {
      const updatedCart = { ...prev, [iteamID]: prev[iteamID] - 1 };
      if (updatedCart[iteamID] <= 0) {
        delete updatedCart[iteamID];
      }
      return updatedCart;
    });
  };

  const getTotalCartAmount = () => {
    let total = 0;
    for (const item in cartIteams) {
      if (cartIteams[item] > 0) {
        let itemInfo = rest_info.find((product) => product.id === item);
        if (itemInfo && itemInfo.prices) {
          const price = itemInfo.prices;
          total += price * cartIteams[item];
        }
      }
    }
    return total;
  };
  const clearCart = () => {
    setCartIteams({});
  };
  const contextValue = {
    rest_info,
    cartIteams,
    setCartIteams,
    addIteam,
    removeIteam,
    getTotalCartAmount,
    clearCart,
  };

  useEffect(() => {
    console.log(cartIteams);
  }, [cartIteams]);

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
