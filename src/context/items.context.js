import { createContext, useState } from "react";

export const itemsContext = createContext({
  items: [],
  categories: [],
  fetchQueryItems:()=>{},
  setItems:()=>{}
});

export const ItemsProviders = ({ children }) => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([])

  const fetchQueryItems= async(q)=>{
    const response = await fetch(`http://localhost:3000/api/v1/items?q=${q}`)
    const data = await response.json()
    setItems(data.items)
    setCategories(data.categories)
  }
  const value = {
    items,
    categories,
    fetchQueryItems,
    setItems
  };
  return (
    <itemsContext.Provider value={value}>{children}</itemsContext.Provider>
  );
};