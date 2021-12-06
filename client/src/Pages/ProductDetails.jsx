import React, { useMemo,useEffect, useState} from "react";
import {useLocation} from "react-router-dom"

function ProductDetails(props){
const [product, setProduct] = useState({})
const location = useLocation(); 

const {value} = location.state;
const id = value;
async function httpGetProduct(id){
    const product = await props.getProduct(id);
    setProduct(product);
}

useEffect(()=> {
    httpGetProduct(id);
},[])

    const singleProduct = useMemo(() => {
           return <div className="single-product" key = {product._id}>
                <img style={{width:"20em", height:"20em", marginLeft:"10em", marginTop: "20px"}}src={`http://localhost:8000/${product.imageUrl}`} alt="my image" />
                <div style={{marginLeft:"40px", marginTop:"20px"}}>
                <h4>{product.productName}</h4>
                <h1>&#8358;{product.price}</h1>
                <h3>{product.description}</h3>
                </div>
            </div>
    },[product])

    return(
        <div class="productDetails">
         {singleProduct}
        </div>
    )
}


export default ProductDetails;