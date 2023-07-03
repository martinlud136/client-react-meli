import { createContext, useState } from "react";

export const detailContext = createContext({
  item: {},
  fetchQueryItem:()=>{},
  setItem:()=>{}
});

export const ItemProvider = ({ children }) => {
  const [item, setItem] = useState({});
 

  const fetchQueryItem= async(q)=>{
    const response = await fetch(`https://api-backend-meli.vercel.app/api/v1/items/${q}`)
    const data = await response.json()
    setItem(data.item)
  }

  const value = {
    item,
    fetchQueryItem,
    setItem
  };

  return (
    <detailContext.Provider value={value}>{children}</detailContext.Provider>
  );
};