import React from 'react';
import Products from '../../COMPONENTS/Product/Products'
import styled from 'styled-components'
function Home() {
    return (
        <Homes>
            <div className="home--container">
                <img className="home--image" src="https://m.media-amazon.com/images/I/71UhgZQzskL._SX3000_.jpg" alt="loading" />

                <div className="home--row">
                    <Products
                        id="01"
                        title="See U in C"
                        price={4450}
                        image="https://images-na.ssl-images-amazon.com/images/I/41SMlI+1PrL._SX331_BO1,204,203,200_.jpg"
                    />
                    <Products
                        id="02"
                        title="Realme Watch Classic Band"
                        price={4900}
                        image="https://images-eu.ssl-images-amazon.com/images/I/41nE84aLWVL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Products
                        id="03"
                        title="Apple iPhone 13 Mini (256GB)"
                        price={79900}
                        image="https://m.media-amazon.com/images/I/61KeIxmldLL._AC_UY218_.jpg"
                    />
                </div>

                <div className="home--row">
                    <Products
                        id="04"
                        title="ASUS ROG Strix G17 (2021) 17.3-inch"
                        price={40000}
                        image="https://m.media-amazon.com/images/I/81Vr3jzftaL._AC_UY218_.jpg"
                    />
                    <Products

                        id="05"
                        title="Victorinox Fieldforce"
                        price={29700}
                        image="https://m.media-amazon.com/images/I/81LnZ7jN7pL._AC_UL320_.jpg"
                    />
                </div>
 
                <div className="home--row">
                    <Products

                        id="06"
                        title="OnePlus 80 cm (32 inch) "
                        price={79900}
                        image="https://m.media-amazon.com/images/I/71vZypjNkPS._AC_UY218_.jpg"
                    />
                </div>
            </div>
        </Homes>
    )
}

export default Home

const Homes = styled.div`
.home{
    display: flex;
    justify-content: center;
    max-width: 1500px;
    margin-left: auto;
    margin-right: auto;
}
.home--container{
    height: 500px;
    width: 100%;
}

.home--row{
    display: flex;
    z-index: 1;
    margin-left: 5px;
    margin-right: 5px;
}
.home--image{
    width: 100%;
    object-fit: contain;
    z-index: -1;
    margin-bottom: -200px;
    mask-image: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0)); //linear gradient for image from bottom
}
`;
