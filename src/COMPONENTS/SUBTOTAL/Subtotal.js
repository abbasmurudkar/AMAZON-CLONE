import React from 'react'
import styled from 'styled-components'
import { useStateValue } from '../../CONTEXT/ContextApi'
function Subtotal() {
    const [{cart},dispatch] = useStateValue()
    return (
        <SubTotal>
            <p> Sub Total ({cart.length} Item): <strong>0 </strong> </p>
            <small className="subtotal__gift">
            <input type="checkbox"/> This order contains a gift
            </small>
            <button> Proceed to Buy </button>
        </SubTotal>
    )
}

export default Subtotal

const SubTotal =  styled.div`
    width: 300px;
    height: 100px;
    padding: 20px;
    background-color:#f3f3f3 ;
    border: 1px solid #dddddd;
    border-radius: 3px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

.subtotal__gift{
    display: flex;
    align-items: center;
}
.subtotal__gift input{
    margin-right: 5px;
}
 button{
    background-color: #f7CA00;
    width: 100%;
    height: 30px;
    border: 0px solid;
    border-color: #9b8212;
    color: black;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    &:hover{
        background-color: #f1c400;
    }
}
`
;