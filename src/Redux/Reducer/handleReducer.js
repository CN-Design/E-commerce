const cart =[];
const handleReducer = (state=cart, action) => {
    const profuct= action.payload;
    switch (action.type) {
        case "ADDITEM":
            //Check if profuct is already exist
            const exist = state.find((x)=> x.id === profuct.id);
            if(exist){
                // increase the quantity
                return (state.map((x)=>
                x.id === profuct.id ? {...x,qty: x.qty +1}: x
                ))
            } 
            else {
                const profuct =action.payload;
                return[
                    ...state,
                    {
                        ...profuct,
                        qty: 1
                    }
                ]
            }
            break;

            case "DELITEM":
                // const exist1 = state.find((x)=>x.id === profuct.id);
                console.log(profuct)
                if(profuct) {
                    return state.filter((x)=>x.id !== action.payload.id);
                }else {
                    return state.map((x)=>
                    x.id=== profuct.id ? {...x, qty: x.qty -1}:x);
                }

                console.log(profuct)
                break;
    
        default:
            return state;
            break;
    }
}

export default handleReducer;