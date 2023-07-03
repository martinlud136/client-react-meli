import { useNavigate } from "react-router-dom";
import "./result-card-styles.scss";

const ResultCard = ({
  title,
  id,
  imgUrl,
  amount,
  currency,
  decimals,
  city,
}) => {
  const navigate = useNavigate();
  const handleCardClick = (id) => {
    navigate(`/items/${id}`);
  };
  return (
    <article className="result-container" onClick={() => handleCardClick(id)}>
      <img className="result-image" alt="imagen resultado" src={imgUrl} />
      <div className="result-description-container">
        <div className="result-price-container">
          <span className="result-currency">{currency}</span>
          <p className="result-price">{amount.toLocaleString()}</p>
        </div>
        <div className="result-description">{title}</div>
      </div>
      <span className="result-city">{city}</span>
    </article>
  );
};

export default ResultCard;
