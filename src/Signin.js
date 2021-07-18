import { useHistory } from "react-router";
import React from 'react';
const { Link } = require("react-router-dom")

const Signin = () => {

    const history = useHistory();

    const clicked = () =>{
        var userlen = document.getElementById("username").value;
        var passlen = document.getElementById("password").value;
        if(userlen.length < 8 && passlen.length < 8){
            history.push('/invalid');
        }
        else{
            history.push('/success');
        }
    }

    return (
        <div className="sign-in-main-box">
            <div className="main-box">
                <div className="sign-in-box">
                    <form className="sign-in-form" autoComplete="off" onSubmit={clicked}>
                        <h1 className="sign-in">Sign In</h1>
                        <input type="text" className="signin-input username" placeholder="username" id="username" spellCheck="false" required />
                        <label htmlFor="username" className="signin-label">username (min 8 character)</label>
                        <input type="password" className="signin-input password" placeholder="password" id="password" required />
                        <label htmlFor="password" className="signin-label">password</label>
                        <button className="sign-in-button">Sign-In</button>
                    </form>
                </div>
                <div className="sign-up-box">
                    <h2 className="sign-heading">If you don't <br />have an account<br />then</h2>
                    <Link to="/signup" className="signin-signup"><span className="signup-span">Sign Up</span></Link>
                </div>
            </div>
        </div>
    );
}

export default Signin;
