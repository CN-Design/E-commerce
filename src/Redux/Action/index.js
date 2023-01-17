// for Add Item to cart
export const addCart = (item) => {
    return {
        type:"ADDITEM",
        payload : item
    }
}



// for Delete Item from Cart
export const delCart = (item) => {
    return {
        type : "DELITEM",
        payload :  item
    }
}