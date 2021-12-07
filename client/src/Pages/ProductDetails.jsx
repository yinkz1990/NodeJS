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
                <img style={{marginLeft:"auto", marginRight: "auto", marginTop:"40px"}}src={`http://localhost:8000/${product.imageUrl}`} alt="my image" />
                <div style={{marginLeft:"40px", marginRight:"20px",  marginTop:"50px"}}>
                <h2 style={{marginTop:"20px"}}>{product.productName}</h2>
                <h3 style={{marginTop:"10px"}}>&#8358;{product.price}</h3>
                <h3 style={{marginTop:"10px"}}>{product.description}</h3>
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