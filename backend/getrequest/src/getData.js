import React, {useState,useEffect} from 'react';
import './App.css';
import axios from "axios";


function GetData(){
      // the useStates that are used to store the number and the response
  const [getNumber, SetNumber] = useState(0);
  const [post, setPpst] = useState([])

  function getnum(){
      // url will get the data from the database just like the url is used to post
      // getNumber will change the number in the url ex. http://localhost:8000/api/2/
    axios.get('http://localhost:8000/api/contact/' + getNumber + "/")
        // will print the response from the url get request
        .then((response) => {
            console.log(response)
            setPpst(response.data)
        })
  }

  return (
    <div className="App">
        {/* the HTML tags that are used to create the buttons and text box on the web page*/}
      <input type="number" onChange={e => SetNumber(parseInt(e.target.value))}/>
        {/* when the button is clicked it will run the getnum function */}
      <button onClick={getnum}>Submit</button>
        <ul>{
            
        }
        </ul>
    </div>
  );
}


export default GetData;