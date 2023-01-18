import { useSelector, useDispatch } from 'react-redux'
import { delCart } from '../Redux/Action';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';


const Cart = () => {
    const [quantity, setQuantity] = useState(1)
    const [price, setPrice] = useState()

    const priceTotal = (item) => {
        if (quantity === 1) {
            setPrice(item);
        } else {
            setPrice(item += item);
        }
    }

    const dispatch = useDispatch();
    const item = useSelector((state) => state.handleReducer)
    return (
        <>
            <div className="hero d-flex justify-content-center ">
                <div style={{ width: "80%", height: "500px" }} className="overflow-auto mt-4 bg-light w-75% text-wh border-0">
                    {item.map((item) => {
                        return (
                            <>
                                <div className="d-flex align-items-center justify-content-between my-5 mx-5 border-bottom shadow-sm p-3 mb-5 bg-white rounded ">
                                    <img src={item.image} height="200px" width="200px" />

                                    {/* Title price */}
                                    <div>
                                    <Card.Body> 
                                        <Card.Title className="mb-0">{item.title.substring(0, 12)}</Card.Title>
                                        <Card.Text className="card-text lead fw-bold">
                                            $ {item.price}
                                        </Card.Text>
                                    </Card.Body>
                                    </div>

                                    <div className='d-flex align-items-center justify-content-center'>
                                        <i onClick={() => {
                                            if (quantity > 1) {
                                                setQuantity(quantity - 1)
                                            }
                                        }} className="fa fa-minus-square me-2 fa-2x"></i>
                                        <input className="me-2 col-sm-3 mb-1" type="text" placeholder={quantity} />
                                        <i onClick={() => {
                                            setQuantity(quantity + 1)
                                            // priceTotal(item.price)
                                            setPrice(item.price += item.price)
                                        }} className="fa fa-plus-square fa-2x"></i>
                                    </div>
                                    <div>
                                        <h6>Total</h6>
                                        <p>{price}</p>
                                    </div>
                                    <button className="btn btn-outline-dark px-4 py-2 me-2" onClick={() => {
                                        dispatch(delCart(item.id))
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