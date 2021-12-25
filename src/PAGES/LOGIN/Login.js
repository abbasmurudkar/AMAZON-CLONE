import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
    return (
        <LoginPage className="Login">
            <Link to="/">
             <img className="Login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Loading" />
            </Link>
        </LoginPage>
    )
}

export default Login

const LoginPage = styled.div`
height: 100vh;
display: flex;
flex-direction:column;
align-items: center;
.Login__logo{
margin-top: 20px;
margin-bottom: 20px;
object-fit: contain;
width: 100px;
margin-left: auto;
margin-right: auto;
}
`;