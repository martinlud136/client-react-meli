import response from "../../items.js";
import "./results.styles.scss";

const Result = () => {
  return (
    <div className="rescults-container">
      <div className="items-container">
        <div className="breadcrumb">{response.categories}</div>
        {response.items.map((item) => {
          return (
            <div key={item.id}>
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Result;
