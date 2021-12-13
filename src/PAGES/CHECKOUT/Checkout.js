import React from 'react';
import styled from 'styled-components'
import CheckoutProduct from '../../COMPONENTS/CHECKOUTPRODUCTS/CheckoutProduct';
import Subtotal from '../../COMPONENTS/SUBTOTAL/Subtotal';
import { useStateValue } from '../../CONTEXT/ContextApi';
function Checkout() {
    const[{cart},dispatch] = useStateValue()
    return (
        <Checkouts>
            <div className="checkout__left">
                <img className="checkout__adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
                <div>
                    <h3 className="checkout__title">Your Shopping Details</h3>
                    {/* cart item here */}
                    {/* cart item here */}
                   {cart.map((item)=>(
                           <CheckoutProduct image={item.image} id={item.id} price={item.price} title={item.title}/>
                   ))}
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
    background-color: #EAEDED;
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
    background-color: #EAEDED;
}
`;