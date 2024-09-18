import React, { useEffect, useState } from 'react'
import "./ProductDetail.css"
import LayOut from '../../Component/Layout/LayOut'
import { useParams } from 'react-router-dom';
import { productUrl } from '../../Api/endPoints';
import axios from "axios"
import ProductCard from '../../Component/Product/ProductCard';
import Loader from '../../Component/Loader/Loader';



function ProductDetail() {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false)
  const { ProductId } = useParams()
  
  useEffect(() => {
    setIsLoading(true)
    axios.get(`${productUrl}/products/${ProductId}`)
      .then((res) => {
        setProduct(res.data)
        setIsLoading(false)
    }).catch((err) => {
      console.log(err);
      setIsLoading(false)
    })
  },[])
  return (
    <LayOut>
      {isLoading ? (<Loader />) : (<ProductCard
        product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
      />)}
  
    </LayOut>
  );
}

export default ProductDetail