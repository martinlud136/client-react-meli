import details from "../../details";
import "./detailProduct.styles.scss"

const DetailProduct = () => {
  return (
    <div className="detail-product-container">
      <div className="product-detail">
        <div className="img-description">
            <img src={details.item.picture} alt="product img" />
            <div className="description-container">
                <div className="description-title">
                    <h2>Descripción del producto</h2>
                </div>
                <p>
                    {details.item.description}
                </p>
            </div>
        </div>
        <div className="price-detail">
            <h4>{`${details.item.condition} - ${details.item.price.amount} vendidos`}</h4>
            <h2>{details.item.title}</h2>
            <h1> {`${details.item.price.amount}`}</h1>
            <button type="submit">Comprar</button>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
