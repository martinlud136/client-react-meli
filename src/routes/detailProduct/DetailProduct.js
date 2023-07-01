import { useContext, useEffect } from "react";
import { detailContext } from "../../context/detail.context";
import { useParams } from "react-router-dom";

import "./detailProduct.styles.scss";

const DetailProduct = () => {
  const { item, fetchQueryItem, setItem } = useContext(detailContext);
  const { id } = useParams();
  useEffect(() => {
    fetchQueryItem(id);
    return () => setItem({});
  }, [id]);
  return (
    <>
      {Object.keys(item).length && (
        <div className="detail-product-container">
          <div className="product-detail">
            <div className="img-description">
              <div className="breadcrumb">{item.categories}</div>
              <img src={item.picture} alt="product img" />
              <div className="description-container">
                <div className="description-title">
                  <h2>Descripción del producto</h2>
                </div>
                <p>{item.description}</p>
              </div>
            </div>
            <div className="price-detail">
              <h4>{`${item.condition} - ${item?.price?.amount} vendidos`}</h4>
              <h2>{item.title}</h2>
              <h1> {`${item?.price?.amount}`}</h1>
              <button type="submit">Comprar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailProduct;
