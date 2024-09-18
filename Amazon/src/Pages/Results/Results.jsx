import React, { useEffect, useState } from 'react'
import "./Results.css"
import LayOut from '../../Component/Layout/LayOut'
import { useParams } from 'react-router-dom';
import axios from "axios"
import { productUrl } from '../../Api/endPoints';
import ProductCard from '../../Component/Product/ProductCard';

function Results() {

  const [results, setResults] = useState([]);
  const { categoryName } = useParams()
  useEffect(() => {
    setIsLoading(true)
     axios.get(`${productUrl}/products/category/${categoryName}`)
       .then((res) => {
         setResults(res.data);
         setIsLoading(false)
       }).catch((err) => {
         console.log(err);
         setIsLoading(false)
       });
  }, [])
 

  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className="Product_container">
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderAdd={true}
                renderDesc={false}
              />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results