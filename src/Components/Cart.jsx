import axios from 'axios';
import react, {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { delCart } from '../Redux/Action';
const Cart = () => {

    // const dispatch= useDispatch();
    // const delProduct = (item)=>{
    //         dispatch(delCart(item))
    // }
    const [dele,setDele]= useState([])

   

    const item = useSelector((state)=>state.handleReducer)

    setDele(item);
    const onDel = (id) =>{
        axios.delete(`https://fakestoreapi.com/products/${id}`).then((response)=>setDele(!dele))
    }


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
                <button className="btn btn-outline-dark px-4 py-2 me-2"> Add to Cart</button>
            </div>
        </>
        )
        
    }
 return (
 <>
        <div className="container py-5">
            <div className="row py-5">
            {/* <ShowItems/> */}
            {item.map((item)=>{
                return (
                    <>
                    <div className="col-md-6">
                <img src={item.image} height="400px" width="400px" />
                <button className="btn btn-outline-dark px-4 py-2 me-2" onClick={()=>{
                    // delProduct(delCart(item))
                    onDel(item.id)
                }}> Remove</button>

            </div>
                    </>
                )
            })}
            </div>
        </div>
 </>
 )
}
export default Cart;