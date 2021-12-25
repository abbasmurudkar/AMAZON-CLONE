import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../CONTEXT/ContextApi'
function CheckoutProduct({ id, title, price, image }) {
    const [{cart}, dispatch] = useStateValue()
    const removeFromCart = () =>{
        dispatch(
            {
                type: "REMOVE_FROM_CART",
                id: id,
                item:{
                    
                }
            }
            )
        }
        return (
            <CHECKOUTPRODUCT className="checkoutProduct">
            <img className="checkoutProductImage" src={image} alt="Loading" />
            <div className="checkoutProduct--Info">
                <p className="checkoutProduct--title">{title}</p>
                <p className="checkoutProduct--price">
                    <b>₹</b>
                    <strong>{price}</strong>
                </p>
            <button onClick={removeFromCart}>Remove From Cart</button>
            </div>

        </CHECKOUTPRODUCT>
    )
}

export default CheckoutProduct

const CHECKOUTPRODUCT = styled.div`
display: flex;
padding: 20px 7px;
border-bottom: 2px solid #EAEDED;

.checkoutProduct--Info{
    padding-left: 20px;
}
.checkoutProduct--Info button{
    background-color: #F7CA00 ;
    color: black;
    border: 1px solid;
    padding: 8px 50px;
    border-color: white;
    margin-top: 10px;
    cursor: pointer;
    border-radius: 24px;
}
.checkoutProductImage{
    object-fit: contain;
    width: 180px;
    height: 180px;
}
.checkoutProduct--title{
    font-size: 20px;
    font-weight: 700;
}
`;

// const cartFromLocalstorage = JSON.parse(localStorage.getItem("Cart"))
// const getitems = () =>{
//     let list = localStorage.getItem("cart")
//     console.log(list)
//     if(list)
//     {
//         return JSON.parse(localStorage.getItem("cart"))
//     }
//     else{
//         return []
//     }
// }
// const [{cart},dispatch] = useStateValue(getitems())
// useEffect(() => {
//     localStorage.setItem("cart",JSON.stringify(cart))
// }, [cart]) 