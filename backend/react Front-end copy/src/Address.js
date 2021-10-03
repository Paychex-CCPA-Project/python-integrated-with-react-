import React, {useState, useEffect} from "react";
import states from "./States";
import addressInfo from "./addressInfo";
import "./styles/address.css"
import axios from "axios";
/// Map functions. File with arrays is addressInfo.js
//file with states array is states.js
// returns another state option within the drop selection menu
function CreateSelect(state){

    return (
        <option value={state.id}>{state.name}</option>
    );
}
function CreateAddress(ad){
    // the useState will retrieve the data that is put into the input
    // the useState returns 2 variables  the variable that represents the initial state and a function that is used to
    // set the altered state
    const [address1,setAddress1] = useState({
        setAddress1: "",
        setAddress2: "",
        setCity: "",
        Zip: ""
    })

        var data = address1

    // ----------------------------------------------------------
    //Post the data taken from the users to django in a post request
    const requestData = ({
        method: 'POST',
        body: JSON.stringify(address1)
    })
    console.log(requestData)
    axios.post(
        'https://car-rental-a1b7f-default-rtdb.firebaseio.com/posts.json',
        requestData,
    ).then(response => {
        console.log(response)
    })
    // ----------------------------------------------------------
    // returns the map for the elements within the address component
    return(
        <span className={ad.class}>
            {/* when the event "e" is change it will call the function to get the data the useState*/}
            <input onChange={ e => setAddress1(e.target.value)} value={address1.setAddress1} key={ad.key} name="setAddress1" className={ad.id} type={ad.type} required/>
            <label>{ad.name}<span style={{color: "red"}}>*</span></label>
        </span>
    );
}
// ----------------------------------------------------------
// this function will render the jsx tags
function Address()  {

        return (
            <div className="input_group">
                <th>
                    Address
                </th>
                {/* this is where the map function is called and will render the elements */}
                {addressInfo.map(CreateAddress)}
                    <label style={{color: "black"}} id="selectID" htmlFor="statesSelect">State</label>
                    <select name="statesSelect" id="statesSelect">
                        {/* this is where the map function is called and will render the elements */}
                        {states.map(CreateSelect)}
                    </select>
            </div>
        );
}

export default Address;

