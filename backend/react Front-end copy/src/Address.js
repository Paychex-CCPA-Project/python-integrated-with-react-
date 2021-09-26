import React, {useState} from "react";
import states from "./States";
import addressInfo from "./addressInfo";

/// Map functions. File with arrays is addressInfo.js
//file with states array is states.js
// returns another state option within the drop selection menu
function CreateSelect(state){
    return (
        <option value={state.id}>{state.name}</option>
    );
}
// returns the map for the elements within the address component
function CreateAddress(ad){
    // the useState will retrieve the data that is put into the input
    // the useState returns 2 variables  the variable that represents the initial state and a function that is used to
    // set the altered state
    const [address1,setAddress1] = useState("")
    var data = address1
    console.log(data)
    // ----------------------------------------------------------
    return(
        <span className={ad.class}>
            {/* when the event "e" is change it will call the function to get the data the useState*/}
            <input onChange={ e => setAddress1(e.target.value)} placeholder={ad.name} className={ad.id} type={ad.type} required/>
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

