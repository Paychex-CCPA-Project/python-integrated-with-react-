import React, {useState} from "react";
import {Row} from "reactstrap";
import contactInfo from "./contactInfo";

// this function maps the contacts section
// file with contact array is in contactInfo.js
function CreatContact(contact){
     // the useState will retrieve the data that is put into the input
    // the useState returns 2 varibles  the varible that represents the initial state and a function that is used to
    // set the altered state
    const [contactInfo, setContactInfo] = useState("")
    let data = contactInfo
    console.log(data)
// ----------------------------------------------------------
    return(
        <span className="form-Adderess">
            {/* when the event "e" is change it will call the function to get the data the useState*/}
            <input onChange={e => setContactInfo(e.target.value)} className={contact.id} placeholder={contact.name} type="text" required/>
            <label>{contact.name}<span style={{color: "red"}}>*</span></label>
        </span>
    );
}
// ----------------------------------------------------------
// this function will render the jsx tags
function Contact(){

    return(
        <div>
            <th>
                Contact
            </th>
            <Row>
                {/* this is where the map function is called and will render the elements */}
                {contactInfo.map(CreatContact)}
            </Row>
        </div>
    );
}

export default Contact;
