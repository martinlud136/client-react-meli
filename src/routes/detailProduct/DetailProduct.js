import { useContext, useEffect } from "react";
import { detailContext } from "../../context/detail.context";
import { useParams } from "react-router-dom";

import BreadCrumb from "../../components/breadcrumb/Breadcrumb.component";

import { getFormatCondition, getFormatCurrency } from "../../utils"

import "./detailProduct.styles.scss";

const DetailProduct = () => {
  const { item, fetchQueryItem, setItem } = useContext(detailContext);
  const { id } = useParams();

  const {
    categories,
    condition,
    picture,
    description,
    title,
    sold_quantity,
    price,
  } = item;
  const amount = price?.amount ?? "";
  const currency = price?.currency ?? ""
  const conditionFormated = getFormatCondition(condition)
  const currencyFormated = getFormatCurrency(currency);

  useEffect(() => {
    fetchQueryItem(id);
    return () => setItem({});
  }, [id]);
  return (
    <>
      {(Object.keys(item).length > 0) && (
        <section className="detail-product-container">
          <div className="product-detail">
            <BreadCrumb categories={categories} />
            <div className="detail-card-container">

              <article className="img-description-container">
                <img className="detail-img" src={picture} alt="product img" />
                <div className="description-container">
                  <p className="description-title">
                    Descripción del producto
                  </p>
                  <p className="description-content">{description}</p>
                </div>
              </article>

              <div className="price-detail">
                <label>{`${conditionFormated} - ${sold_quantity} vendidos`}</label>
                <h2 className="title-detail">{title}</h2>
                <div className="detail-price-container">
                  <span className="detail-currency">{currencyFormated}</span>
                  <p className="detail-price">{amount.toLocaleString()}</p>
                </div>
                <button type="submit">Comprar</button>
              </div>

            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DetailProduct;
