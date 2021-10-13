import React, {useState} from "react";
import {Row} from "reactstrap";
import requestCheck from "./requesstCheck";


// this function will create a new check box element with a label
// the array for request check can be found at requestCheck.js
function CreateCheck(request){
    // the useState will retrieve the data that is put into the input
    // the useState returns 2 varibles  the varible that represents the initial state and a function that is used to
    // set the altered state
    const [checked,setChecked] = useState(false)
    let data = checked
    function isChecked(e){
        setChecked(
            true
        )
    }
        const [dataReport, setReport] = useState(false)
    const [dataRetrival, setDataRetrival] = useState(false)
    const [dataPurge, setPurge] = useState(false)

  const [radio1, setRadio1] = useState(false)
    const [radio2, setRadio2] = useState(false)

         contactForm.append('radio1', radio1)
            contactForm.append('radio2', radio2)
      contactForm.append('dataReport', dataReport)
            contactForm.append('dataPurge', dataPurge)
            contactForm.append('dataRetrival', dataRetrival)
    // ----------------------------------------------------------
    return (
        <Row>
            {/* when the event "e" is change it will call the function to get the data the useState*/}
            <input onChange={e => isChecked(e.target.value)} type={request.type} id={request.id} required/>
            <label className={request.class} >{request.name}</label>
        </Row>
    );
}

// ----------------------------------------------------------
// this function will render the jsx tags
function Request(){

    return (
        <div>
            <th>
                Request Type
            </th>
            {/* */}
            <Row className="required">
                Please select the reason(s) for this request.
            </Row>
            {/* this is where the map function is called and will render the elements */}
            {requestCheck.map(CreateCheck)}
        </div>
    );
}

export default Request;
