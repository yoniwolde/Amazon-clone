import React from "react";
import { categoryInfo } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import './category.css';

function Category() {
  return (
      <section className="category_container">
        {
              categoryInfo.map((infos, index) => (
                <CategoryCard data={infos}
                key={index}/>
            ))
        }
    </section>
  )
}

export default Category;
