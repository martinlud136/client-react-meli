import { useContext, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { itemsContext } from "../../context/items.context";
import "./results.styles.scss";

const Result = () => {
  const { items, categories, fetchQueryItems, setItems } =
    useContext(itemsContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    fetchQueryItems(searchValue);
    return () => setItems([]);
  }, [searchValue]);

  const handleCardClick = (item) => {
    const idItem = item.id;
    navigate(`/items/${idItem}`);
  };

  return (
    <>
      {items.length && <div className="rescults-container">
        <div className="items-container">
          <div className="breadcrumb">{categories}</div>
          {items.map((item) => {
            return (
              <div key={item.id} onClick={() => handleCardClick(item)}>
                <h2>{item.title}</h2>
              </div>
            );
          })}
        </div>
      </div>}
    </>
  );
};

export default Result;
