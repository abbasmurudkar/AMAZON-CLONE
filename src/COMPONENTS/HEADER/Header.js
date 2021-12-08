import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { useStateValue } from '../../CONTEXT/ContextApi';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
function Header() {

    const [{cart}, dispatch] = useStateValue()


    return (
        <>
            {/* // <------NAVBAR--------> */}
            <Headers>

                {/* IMAGE PART */}

                <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Loading" />
                </Link>
                <div >
                    <LocationOnOutlinedIcon  className="header__location"/>
                </div>
                <div className="header__option">
                    <span className="header__optionlineOne">Hello </span>
                    <span className="header__optionlineTwo"><strong>Select your address</strong></span>
                </div>

                {/* INPUT TAG */}
                <div className="header__search">
                    <input type="text" className="header__searchInput" />
                    <button className="header__searchIcon"><SearchIcon /></button>
                </div>

                <div className="header__nav">

                    {/* Box1 */}

                    <div className="header__option">
                        <span className="header__optionlineOne">Hello Guest</span>
                        <span className="header__optionlineTwo">Sign In</span>
                    </div>

                    {/* Box2 */}

                    <div className="header__option">
                        <span className="header__optionlineOne">Returns</span>
                        <span className="header__optionlineTwo">& Orders</span>
                    </div>

                    {/* Box3 */}

                    <div className="header__option">
                        <span className="header__optionlineOne">Your</span>
                        <span className="header__optionlineTwo">Prime</span>
                    </div>
                </div>
                <Link to="/checkout" className="header__cart">
                    <ShoppingCartIcon />
                    <span className="header__optionlineTwo header__cartcount">{cart.length}</span>
                </Link>

            </Headers>
        </>
        // NAVBAR ENDS--->

    )
}

export default Header


const Headers = styled.div`
/* NAVBAR */
    background-color: rgb(15, 17, 17);
    display: flex;
    align-items: center;
    height: 60px;
    padding: 5px 10px;
    position: sticky;
    top: 0;
    z-index: 100;   

/* LOGO CSS */
.header__logo{
    width: 100px;
   object-fit: contain;  /*this tag is use to have perfect fit of picture so the pixel of picture will remain same and have better quality*/
   margin: 8px 20px;
   margin-top: 18px;
   
}

/* SEARCH BAR CSS */
.header__searchInput{
 padding: 10px;
 height: 14px;
 border: none;
 width: 100%;

}
.header__searchIcon{
    background-color: #febd69;
    height: 36px;
    padding: 4px;
    cursor: pointer;
    border: none;
    outline: none;
    padding-left: 6px;
    padding-right: 6px;
}
.header__search{
    display: flex;
    flex: 1;
    align-items: center;
}


.header__nav{
    display: flex;
    justify-content: space-evenly;

}
.header__option{
    display: flex;
    flex-direction: column;
    color: white;
    margin-left: 10px;
    margin-right:10px;
}

.header__optionlineOne{
    font-size: 12px;
    cursor: pointer;
}
.header__optionlineTwo{
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
}
.header__cart{
    color: white;
    display: flex;
    align-items: center;
}

.header__cartcount{
    margin-left: 5px;
    margin-right:5px;
}
.header__optionlineOne:hover{
    text-decoration: underline;
}
.header__optionlineTwo:hover{
    text-decoration: underline;
}
.header__location{
    color: white;
    margin-right: -10px; 
    height: 22px;
}
`;