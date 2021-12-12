import React from 'react'
import styled from 'styled-components'
function CheckoutProduct({ id, title, price, image }) {
    return (
        <CHECKOUTPRODUCT className="checkoutProduct">
            <img className="checkoutProductImage" src={image} alt="Loading" />
            <div className="checkoutProduct--Info">
                <p className="checkoutProduct--title">{title}</p>
                <p className="checkoutProduct--price">
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
            <button>Remove From Cart</button>
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
