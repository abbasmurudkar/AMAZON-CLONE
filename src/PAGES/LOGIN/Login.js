import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Login() {
    return (
        <LoginPage>
            <Link to="/">
                <img className="Login__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Loading" />
            </Link>
            <LoginContainer>
                <h1>SIGN IN</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type="text" />
                    <h5>Password</h5>
                    <input type="password" />
                    <button>Sign-In</button>
                </form>
                <p>
                    By continuing, you agree to Amazon's Conditions of Use and Privacy Notice, our Cookies Notice and out Interest-Based Ads Notice.
                </p>
                <button>Create your Amazon Account</button>
            </LoginContainer>
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
const LoginContainer = styled.div`
display: flex;
flex-direction: column;
justify-content:center ;
align-items: center;
`;
