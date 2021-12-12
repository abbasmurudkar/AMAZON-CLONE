import React from 'react'

function CheckoutProduct({ id, title, price, image }) {
    return (
        <div className="checkoutProduct">
            <img className="checkoutProductImage" src={image} alt="Loading" />
            <div className="checkoutProduct--Info">
                <p className="checkoutProduct--title">{title}</p>
                <p className="checkoutProduct--price">
                    <bold>₹</bold>
                    <strong>{price}</strong>
                </p>
            </div>

            <button>Remove From Cart</button>
        </div>

    )
}

export default CheckoutProduct
