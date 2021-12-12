import React from 'react';
import styled from 'styled-components'
import { useStateValue } from '../../CONTEXT/ContextApi';
function Products({id, title, price, image }) {
 const [{cart}, dispatch] = useStateValue()
    const addToCart = () => {
    dispatch({
        type:"ADD_TO_CART",
        item:{
            id:id,
            title:title,
            price:price,
            image:image
        }
    })
   }

    return (
        <Product>
            <div className="product--info">
                <p>{title}</p>
                
                <p className="product--price">
                <bold>₹</bold>
                <strong>{price}</strong>
                </p>
                
                <img className="product--image" src={image} alt="" /> 
            </div>
             <button className="product--button" onClick = {addToCart} >Add to Cart</button>  
            
        </Product>
    )
}

export default Products

const Product = styled.div`

    display: flex;
    flex-direction: column;
    background-color: white;
    z-index: 1;
    align-items: center;
    justify-content: flex-end;
    margin: 10px;
    padding: 20px;
    width: 100%;
    max-height: 400px;
    min-width: 100px;

.product--image{
    max-height: 275px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
}
.product--info{
    height: 450px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
}

.product--price{
    margin-top: 5px;
}

.product--button{
    background-color: #F7CA00 ;
    color: black;
    border: 1px solid;
    border-radius: 24px;
    padding: 8px 50px;
    border-color: white;
    margin-top: 10px;
    cursor: pointer;
}

`;