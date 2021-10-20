import React, {useState,useEffect} from 'react';
import './App.css';
import GetData from "./getData";
import Login from "./login";
import axios from "axios";

function App() {
    const Admin = {
        username: "MasonK",
        password: "71L643co"
    }

    const [error, setError] = useState("");
    const [correct, setCorrect] = useState(false)

    const [user, setUser] = useState(
        {username: "", password: ""}
    )

    const login = detail =>{
        console.log(detail)

        if(detail.username === Admin.username && detail.password === Admin.password){
            setCorrect(true)
            setUser({username: detail.username, password: detail.password})
        }else{
            setError("Password or Username does not match")
        }
    }

    const logout = () =>{
        setUser({username: "", password: ""})
    }
  return (
    <div className="App">
        {
            (correct) ? (
                <div>
                      <GetData/>
                      <button onClick={logout} >Logout</button>
                </div>
            ) : (<Login login={login} error={error}/>)
        }
    </div>
  );
}

export default App;
