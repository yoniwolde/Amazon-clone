import React from "react";
import { categoryInfo } from "./CategoryFullInfo";
import CategoryCard from "./CategoryCard";
import './category.css';

function Category() {
  return (
      <section className="category_container">
        {
              categoryInfo.map((infos) => (
                <CategoryCard data={infos} />
            ))
        }
    </section>
  )
}

export default Category;
