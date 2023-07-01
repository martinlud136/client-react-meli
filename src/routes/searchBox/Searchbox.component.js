import { Outlet } from "react-router-dom";

import meliLogo from "../../assets/Logo_ML.png";
import searchImg from "../../assets/ic_Search.png";

import "./searchbox.styles.scss";

const SearchBox = () => {
  return (
    <>
      <div className="search-container">
        <div className="input-container">
          <img src={meliLogo} alt="logo -meli" className="meli-logo" />
          <input className="search-box" type="search" />
          <img src={searchImg} alt="logo-search" className="search-img" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchBox;
