import React from "react";
import LayOut from "../../Component/Layout/LayOut";
import Category from "../../Component/Category/Category";
import Carousel from "../../Component/Carousel/CarouselEffect";
import Product from "../../Component/Product/Product";

function Landing() {
  return (
    <LayOut>
      <Carousel />
      <Category />
      <Product />
    </LayOut>
  );
}

export default Landing;
