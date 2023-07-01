import { Outlet, useNavigate } from "react-router-dom";
import meliLogo from "../../assets/Logo_ML.png";
import searchImg from "../../assets/ic_Search.png";

import "./searchbox.styles.scss";

const SearchBox = () => {
    let navigate = useNavigate()
    let timeOut
    const handleChange = (e)=>{
        const searchFieldString = e.target.value;
        clearTimeout(timeOut)
        timeOut = setTimeout(()=>{
            navigate(`/items?search=${searchFieldString}`);
        },200)
    }

  return (
    <>
      <div className="search-container">
        <div className="input-container">
          <img src={meliLogo} alt="logo -meli" className="meli-logo" />
          <input className="search-box" type="search" onChange={handleChange}/>
          <img src={searchImg} alt="logo-search" className="search-img" />
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchBox;
