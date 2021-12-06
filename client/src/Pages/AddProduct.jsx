import React, {useState} from "react";
import axios from "axios";

import "./AddProduct.css"



function AddProduct (props) {
    const [data, setData] = useState({
        name:"",
        file:"",
        price:"",
        cuisine:"",
        description:""
    })
    // const onFormSubmit = (e) =>{
    //     e.preventDefault();
    //     const formData = new FormData(e.target);
        // formData.append('mymage', data.file);
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // };
    //     axios.post("http://localhost:8000/product", formData)
    //         .then((response) => {
    //             alert("The file is successfully uploaded");
    //         }).catch((error) => {
    //     });
    // }
    function handleChange(e){
        e.target.type === "file" ? setData({file : e.target.files[0]}) :
        setData((...prevState) => ({ ...prevState,
            [e.target.name]: e.target.value
        })
        )}

      

    const{submitProduct} = props;
    return (
        
        <div className="addproduct">
           <div style={{marginBottom:"1.5em"}}>
           <h1 style={{paddingTop: "1em", textAlign:"center", color:"whitesmoke"}}>Add a new product here</h1>
           </div>
            
        <div className="product">
            <form onSubmit={submitProduct} encType="multipart/form-data">
                    <div>
                        <label htmlFor="product-name">Product Name</label>
                        <input type="text" name="name" id="product-name" value={data.name} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="image">Image</label>
                        <input type="file" name="image" id="image" />
                    </div>
                    <div>
                        <label htmlFor="price">Price</label>
                        <input type="number" name="price" id="price" value={data.price} onChange={handleChange} step="0.01" />
                    </div>
                    <div>
                        <label htmlFor="cuisine">Cuisine</label>
                        <input type="text" name="cuisine" id="cuisine" onChange={handleChange} value={data.cuisine}/>
                   </div>
                    <div>
                        <label htmlFor="decription">Description</label>
                        <textarea style={{border:" 2px solid green"}} name="description" onChange={handleChange} id="description" value={data.description} cols="40" rows="10">
                        </textarea>
                    </div>
                    
                     <button  className="submit-button" type="submit">Submit</button>

            </form>
             
          

        </div>
        </div>
    )
}


export default AddProduct;