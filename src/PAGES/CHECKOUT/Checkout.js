import React from 'react';
import styled from 'styled-components'
import Subtotal from '../../COMPONENTS/SUBTOTAL/Subtotal';
function Checkout() {
    return (
        <Checkouts>
            <div className="checkout__left">
                <img className="checkout__adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
                <div>
                    <h3 className="checkout__title">Your Shopping Details</h3>
                    {/* cart item here */}
                    {/* cart item here */}
                </div>

            </div>

            <div className="checkout__right">
               <Subtotal />
                    
            </div>
            
        </Checkouts>
    );
}

export default Checkout;

const Checkouts = styled.div`
    display: flex;
    background-color: bisque;
    height: max-content;
    padding: 20px;

.checkout__left{
    background-color: white;
}
.checkout__title{
    border-bottom: 1px solid black;
    padding: 10px;
}
.checkout__adv{
    width: 100% ;
    margin-bottom: 10px;
}
.checkout__right{
    background-color: cyan;
}
`;