import React from 'react'
import { useParams } from 'react-router'
import DATA from '../Data';

const ProductDetails = () => {
    {/* need a product  id which is pass from the product page */}

    const productId = useParams();
    const productDetail = DATA.filter(x => x.id == productId.id)
    const product = productDetail[0];
    console.log(product);
  return (
<>
<div className="container my-5 py-3">
    <div className="row">
        <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={product.img} alt="" height="300px" />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">${product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button className="btn btn-outline-primary my-4">Add To Cart</button>
        </div>
    </div>
</div>
</>
  )
}

export default ProductDetails