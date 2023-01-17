import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import { addCart } from "../Redux/Action";


const ProductInfo = () => {
    const {id}= useParams()
    const [item, setItem] = useState([]);

    const dispatch = useDispatch();
    const addProduct= (item) => {
        dispatch(addCart(item))
    }

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`)
            setItem(await response.json());
        }
        getProduct();
    }, [])

    const ShowItems = () => {
        return (
            <>
            <div className="col-md-6">
                <img src={item.image} height="400px" width="400px" />
            </div>
            <div className="col-md-6">
                <h4 className="text-uppercase text-black-50">
                    {item.category}
                </h4>
                <h1 className="display-5"> {item.title}</h1>
                <p className="lead fw-bolder">
                    Rating {item.rating && item.rating.rate}  
                <i className="fa fa-star"></i>
                </p>
                <h3 className="display-6 fw-bold my4">
                    $ {item.price}
                </h3>
                <p className="lead">
                    {item.description}
                </p>
                <button className="btn btn-outline-dark px-4 py-2 me-2 bg-dark text-white" onClick={()=>addProduct(item)}> Add to Cart</button>
                <Link to={`/cart/${item.id}`} className="btn btn-outline-dark px-4 py-2 "> Go To Cart</Link>
            </div>
        </>
        )
        
    }
    return(
        <>
        <div className="container py-3">
            <div className="row py-5">
            <ShowItems/>
            </div>
        </div>
        </>
    )
   
}
export default ProductInfo; 