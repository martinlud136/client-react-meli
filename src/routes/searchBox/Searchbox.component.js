import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import meliLogo from "../../assets/Logo_ML.png";
import searchImg from "../../assets/ic_Search.png";

import "./searchbox.styles.scss";

const SearchBox = () => {
  let navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSearchText = (e) => {
    if (e.type === "click" || e.key === "Enter") {
      console.log("entra");
      navigate(`/items?search=${text}`);
    }
  };

  const handleChange = (e) =>{
    const textFromInput = e.target.value
    setText(textFromInput)
  }

  return (
    <>
      <div className="search-container">
        <div className="input-container">
          <img src={meliLogo} alt="logo -meli" className="meli-logo" />
          <input
            className="search-box"
            placeholder="Nunca dejes de buscar"
            type="text"
            onChange={handleChange}
            onKeyDown={handleSearchText}
          />
          <img
            src={searchImg}
            alt="logo-search"
            className="search-img"
            onClick={handleSearchText}
          />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchBox;
