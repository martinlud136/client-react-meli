import { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { itemsContext } from "../../context/items.context";

import BreadCrumb from "../../components/breadcrumb/Breadcrumb.component";
import ResultCard from "../../components/result-card/Result-card.component";

import { getFormatCurrency } from "../../utils/getFormatCurrency";

import "./results.styles.scss";

const Result = () => {
  const { items, categories, fetchQueryItems, setItems } =
    useContext(itemsContext);
  const [searchParams] = useSearchParams();
  const searchValue = searchParams.get("search");

  useEffect(() => {
    fetchQueryItems(searchValue);
    return () => setItems([]);
  }, [searchValue]);

  return (
    <>
      {items.length && (
        <div className="rescults-container">
          <div className="items-container">
            <BreadCrumb categories={categories} />
            {items.map((item) => {
              const {
                title,
                id,
                picture,
                price: { amount, currency, decimals },
                city,
              } = item;
              const currencyFormated = getFormatCurrency(currency);

              return (
                <ResultCard
                  key={id}
                  title={title}
                  id={id}
                  imgUrl={picture}
                  amount={amount}
                  currency={currencyFormated}
                  decimals={decimals}
                  city={city}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Result;
