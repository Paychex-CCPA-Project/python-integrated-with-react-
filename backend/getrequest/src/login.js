import React, {useState,useEffect} from 'react';
import './App.css';
import axios from "axios";

function Login({login, error}){

    const [detail, setDetail] = useState({
        username: "", password: ""
    });

    const submitHandler =  e =>{
        e.preventDefault();
        login(detail)
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>Login</h2>
                {                       /*ERROR*/
                    (error !== "") ? <div className="error">{error}</div> :  ""
                }
                <div className="form-group">
                    <label htmlFor="name">username: </label>
                    <input onChange={ e => setDetail({...detail, username: e.target.value})} type="text" name="name" id="name"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="email">password: </label>
                    <input onChange={ e => setDetail({...detail, password: e.target.value})} type="password" name="email" id="email"/>
                </div>
                <input type="submit" value="Login"/>
            </div>
        </form>
    );
}
export default Login;
