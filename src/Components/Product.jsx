import react, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, NavLink } from 'react-router-dom';

const Product = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    let componentMounted = true;

    useEffect(() => {
        const getProduct = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                // console.log(filter)
            }
            return () => {
                componentMounted = false;
            }
        }

        getProduct();
    }, [])

    const FilterProduct = (cat) => {
        const updateList = data.filter((x)=>x.category === cat);
        setFilter(updateList);
    }

    const ShowProduct = () => {
        return <>
            <div className="buttons d-flex justify-content-center mb-5 pb-5">
                <button className='btn btn-outline-dark me-2' onClick={()=> setFilter(data)} >All</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> FilterProduct("men's clothing")}>Men's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> FilterProduct("women's clothing")}>Women's Clothing</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> FilterProduct("jewelery")}>Jewelery</button>
                <button className='btn btn-outline-dark me-2' onClick={()=> FilterProduct("electronics")}>Electronics</button>
            </div>
            {filter.map((item) => {
                return (
                    <>
                        <div className="col-md-3 mb-4">
                            <Card className=" card h-100 text-center p-4" key={item.id}>
                                <Card.Img src={item.image} height="250px" />
                                <Card.Body>
                                    <Card.Title className="mb-0">{item.title.substring(0,12)}</Card.Title>
                                    <Card.Text className="card-text lead fw-bold">
                                        ${item.price}
                                    </Card.Text>
                                    <Link to={`/product/${item.id}`} className="btn btn-outline-dark">Buy Now</Link>
                                </Card.Body>
                            </Card>
                        </div>
                    </>
                )
            })}
        </>
    }
    return <>
        <div className="container my-5 py-5">
            <div className="row">
                <div className="col-12 mb-5">
                    <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                    <hr />
                </div>
                <ShowProduct />
            </div>
        </div>
    </>
}
export default Product;