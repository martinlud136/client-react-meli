import React from "react";
import "./breadcrumb.styles.scss"

const BreadCrumb = ({categories}) =>{
    console.log(categories)
    return( <div className="breadcrumb-container">
        {categories?.map((category, i) => {
          const components = [];
          const isLastSection = i === categories.length - 1;
    
          components.push(
              <span className="breadcrumb-section" key={category}>
                {category}
              </span>)
    
          if (!isLastSection) {
            components.push(
              <div className="breadcrumb-separator" key={i}>&gt;</div>
            );
          }
    
          return components;
        })}
      </div>)
    
}

export default BreadCrumb