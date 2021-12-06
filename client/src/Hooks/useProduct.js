import { useCallback, useState, useEffect } from "react";
import {getHttpProduct, postHttpProduct, deleteHttpProduct, getHttpSingleProduct} from "./request";


function useProduct (){
    const [products, setProducts] = useState([]);
    const [pagination, setPaginateContent] = useState({});
    const [data, setData] = useState({
        name:"",
        image:"",
        price:"",
        cuisine:"",
        description:""
    })

//To get product from the database during initial rendering 
const getProducts = useCallback( async (page)=>{

        const fetchData = await getHttpProduct(page);
        setProducts(fetchData.data.products);
        setPaginateContent({
            page: fetchData.data.page,
            numberOfItems: fetchData.data.numberOfItems,
            pageSize: fetchData.data.pageSize
        })
        

    }, []);

    useEffect(() => {
        getProducts()
    }, [getProducts]);

const getSingleProduct = useCallback(async(id)=>{
   const fetchSingleProduct = await getHttpSingleProduct(id);
   return fetchSingleProduct.data;
},[])


//Submit product to the database
const submitProduct = useCallback(async (e)=>{
    e.preventDefault()
    
    const data = new FormData(e.target);
    const response = await postHttpProduct(data);

    const success = response.statusText
    if(success === "Created"){
       getProducts()
    }

},[getProducts]);


const deleteProduct = useCallback(async (id) => {
    const response = await deleteHttpProduct(id);
    const success = response.ok;
    if (success){
        getProducts();
    }

})


return {
    products,
    pagination,
    getProducts,
    submitProduct,
    deleteProduct,
    getSingleProduct,
}
}



export default useProduct;