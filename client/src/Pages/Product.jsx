import React,{useMemo, useEffect,} from "react";
import{Link, useLocation } from "react-router-dom";
import ImageSlider from "../utils/imageslider";



function Products (props){
const {search, pathname} = useLocation();
const location = useLocation();
let params = new URLSearchParams(search);
const queryPage = +params.get("page");

    const {products, pagination, getProducts} = props;
    const page = pagination.page;
    const numberOfItems = pagination.numberOfItems;
    const pageSize = pagination.pageSize;
    const lastPage = Math.ceil(numberOfItems/pageSize);
    const previousPage = page - 1;
    const nextPage = page + 1;
    const hasNextPage = lastPage > page;
    const hasPreviousPage = page !== 1;
    

    const handleProduct = useMemo(()=>{
       return products.map(product => {
           return(
                 <div className="product-list-item" key={product._id} >
                  <Link to={{ pathname:'/productdetails', state:{ value: product._id } }} style={{ textDecoration: 'none' }}>
                  <img src={`http://localhost:8000/${product.imageUrl}`} alt="my image" />
                  <div className="product-list-details">
                    <h2>{product.productName}</h2>
                    <h3>&#8358;{product.price}</h3>
                    <h3>{product.cuisine}</h3>
                   </div>
                  </Link>
                </div>               
               
           )
       })   
    },[products])

  
  useEffect(() => {
    return () => {
      // && history.location.pathname === "any specific path")
      window.history.pushState(null, null, document.URL);
      window.addEventListener('popstate', function(event) {
            window.location.replace(
                `${pathname}${search}`
            )});
            }
  }, [location.search])

     

    return(
        <div>
            <div className="first-section">
               <div className="menu">
                    <nav className="menu-bar">
                        <ul className="menu-list" style={{listStyleType:"none"}}>
                            <li className="menu-item"><a href="">Continental</a></li>
                            <li className="menu-item"><a href="">Africa</a></li>
                            <li className="menu-item"><a href="">Chinese</a></li>
                            <li className="menu-item"><a href="">Spanish</a></li>
                            <li className="menu-item"><a href="">Italian</a></li>
                            <li className="menu-item"><a href="">Local</a></li>
                        </ul>
                    </nav>
               </div>
               <div className="image-slider">
                   <ImageSlider/>
               </div>
               <div className="menu-two">
                    <nav className="menu-bar">
                        <ul className="menu-list menu-list-1" style={{listStyleType:"none"}}>
                            <li className="menu-item"><a href="">Cakes</a></li>
                            <li className="menu-item"><a href="">Icecream</a></li>
                            <li className="menu-item"><a href="">Shawarma</a></li>
                            <li className="menu-item"><a href="">Short Bread</a></li>
                            <li className="menu-item"><a href="">Snacks</a></li>
                        </ul>
                    </nav>
               </div>
            </div>
            <div className="product-list">
                    
                    {handleProduct}
                
            </div>

           <div className="pagination">
               <ul className="pagination-content">
                   <li className="pagination-item">{page !== 1 && <Link to="?page=1"  className={queryPage === 1 ? "" : "pg-link"}style={{textDecoration:"none"}} onClick={()=>getProducts(1)}>1</Link>}</li>
                   <li className="pagination-item">{hasPreviousPage && previousPage !== 1 && <Link to={`?page=${previousPage}`} className={queryPage === previousPage ? "" : "pg-link"} style={{textDecoration:"none"}} onClick={()=>getProducts(previousPage)} >{previousPage}</Link>}</li>
                   <li className="pagination-item"><Link to={`?page=${page}`} style={{textDecoration:"none"}} onClick={()=>getProducts(page)}>{page}</Link></li>
                   <li className="pagination-item">{hasNextPage && <Link to={`?page=${nextPage}`} className={queryPage === nextPage? "" : "pg-link"} style={{textDecoration:"none"}} onClick={()=>getProducts(nextPage)}>{nextPage}</Link>}</li>
                   <li className="pagination-item">{lastPage !== page && lastPage !== nextPage && <Link to={`?page=${lastPage}`} className={queryPage === lastPage ? "" : "pg-link"} style={{textDecoration:"none"}} onClick={()=>getProducts(lastPage)}>{lastPage}</Link>}</li>
               </ul>
           </div>
           
        </div>
    )
}


export default Products;