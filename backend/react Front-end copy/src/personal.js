import React, {useState} from "react";
import "./styles/personal.css";
import personalData from "./personalData";
import {  Row } from 'reactstrap';

// this function will map create tags automatically depeanding on how many inputs there are
/// Map functions. File with arrays is personalData.js

let data
// returns personal html tag for the personal tabel data
function CreatePersonal(pd){
    // the useState will retrieve the data that is put into the input
    // the useState returns 2 varibles  the varible that represents the initial state and a function that is used to
    // set the altered state
    const [personalInfo, setPersonalInfo] = useState("")
     data = personalInfo

console.log(data)
// ----------------------------------------------------------
     const requestOptions = {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }

    return(
        <span className="form-personal">
            {/* when the event "e" is change it will call the function to get the data the useState*/}
            <input onChange={ e => setPersonalInfo(e.target.value)} className={pd.id} type={pd.type} placeholder={pd.name} required/>
            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
        </span>
    );
}


// ----------------------------------------------------------
// this function will render the jsx tags
function Personal(){
    return (
        <div>
        <th>
            <Row>
                Personal Details
            </Row>
        </th>
            {/* this is where the map function is called and will render the elements */}
            {personalData.map(CreatePersonal)}
        </div>

    );

}

export default Personal;
