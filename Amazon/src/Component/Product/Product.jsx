import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import "./Product.css"
import Loader from '../Loader/Loader'

function Product() {
  const [product, setProduct] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res)=> {
        setProduct(res.data)
        setIsLoading(false);
    }).catch((err) => {
      console.log(err);
      setIsLoading(false);
    })
  }, [])
  
  return (
    <>
      {
        isLoading ? (<Loader />) : (<section className="products_container">
          {
            product?.map((singleProduct) => {
              return <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
            })
      }
      </section>)
      } 
    </>
  );
}

export default Product