import React  from "react";
import {Switch, Route,Redirect} from "react-router-dom";
import useProduct from "../Hooks/useProduct";
import useReservation from "../Hooks/useReservation";



import AddProduct from "./AddProduct";
import Products from "./Product";
import AddReservation from "./AddReservation";
import Reservation from "./Reservation"
import Header from "../component/header";
import Footer from "../component/footer";
import ProductDetails from "./ProductDetails";
import CompletedReservation from "./completedReservation";
import Home from "./Home";
import About from "./About";



function AppLayout () {
    const { products, submitProduct, deleteProduct, getProducts, getSingleProduct, pagination} = useProduct();
    const{reservation, error, successmsg, postReservation, completeReservation,  abortReservation} = useReservation();

    return (
        <main>
        <Header/>
        <Switch>
            <Route path="/" exact> 
                <Home />
            </Route>
            <Route exact path="/reservation/complete">
                <CompletedReservation
                   reservation={reservation}
                />
            </Route>
            <Route exact path="/reservation"> 
                <AddReservation
                   postReservation={postReservation}
                   errors={error}
                   successmsg={successmsg}
                   
                />
            </Route>
            <Route exact path="/addproduct">
                 <AddProduct
                 submitProduct={submitProduct}
                 />  
            </Route>
            <Route exact path ="/about">
                 <About 
                 
                 />  
            </Route>
            <Route exact path="/product">
                 <Products
                 products = {products}
                 pagination={pagination}
                 getProducts={getProducts}
                 />    
            </Route> 
            <Route  exact path="/reservation-list">
                <Reservation
                        reservation={reservation}
                        abortReservation={ abortReservation}
                        completeReservation ={completeReservation}
                />
            </Route> 
            <Route exact path="/productdetails">
                <ProductDetails
                 getProduct={getSingleProduct}
                />

            </Route>
            <Redirect  from='*' to="/" />
        </Switch>
        <Footer/>
    </main>
    )
}

export default AppLayout;