import React, {useState, Component,} from "react";
import {Row} from "reactstrap";
import states from "./States";
import contactInfo from "./contactInfo";
import {useHistory} from "react-router"

import axios from "axios";
import Request from "./Request";
import Address from "./Address";
// this function maps the contacts section
// file with contact array is in contactInfo.js
// this function will render the jsx tags
function CreateSelect(state){

    return (
        <option value={state.id}>{state.name}</option>
    );
}
const Contact = () => {
    // the useState will retrieve the data that is put into the input
    // the useState returns 2 variables  the variable that represents the initial state and a function that is used to
    // set the altered state
// ----------------------------------------------------------
    const [phoneInfo, setPhoneInfo] = useState("")
    const [emailInfo, setEmailInfo] = useState("")
    const [address1,setAddress1] = useState("")
    const [address2, setAddress2] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
// ----------------------------------------------------------
    let history = useHistory()
    const addContactInfo = async () => {
            let contactForm = new FormData()


        contactForm.append('address', address1)
        contactForm.append('address2', address2)
        contactForm.append('city', city)
        contactForm.append('emailInfo', emailInfo)
        contactForm.append('phoneInfo',phoneInfo)
        contactForm.append('zip', zip)

        console.log(Array.from(contactForm))

       await axios({
               method: 'post',
               url: 'http://localhost:8000/api/',
               data: contactForm
           })
           .then((response) => {
           console.log(response)
       })
    }
    // ----------------------------------------------------------

    return(
        <div>

             <tr >
                 <td>
                     <div className="input_group">
                     <th>
                    Address
                      </th>
                         <span className="form-Adderess">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setAddress1(e.target.value)} value={address1.setAddress1}  name="setAddress1" className="address" type="text" required/>
                            <label>Address<span style={{color: "red"}}>*</span></label>
                        </span>
                     <span className="form-Adderess">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setAddress2(e.target.value)} name="setAddress1" className="address" type="text" required/>
                            <label>Address two<span style={{color: "red"}}>*</span></label>
                        </span>
                     <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setCity(e.target.value)} name="setAddress1" className="city" type="text" required/>
                            <label>City<span style={{color: "red"}}>*</span></label>
                        </span>
                     <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setZip(e.target.value)} name="setAddress1" className="city" type="text" required/>
                            <label>Zip<span style={{color: "red"}}>*</span></label>
                        </span>
                     <label style={{color: "black"}} id="selectID" htmlFor="statesSelect">State</label>
                     <select name="statesSelect" id="statesSelect">
                        {/* this is where the map function is called and will render the elements */}
                        {states.map(CreateSelect)}
                    </select>
                     </div>
                 </td>
             </tr>
            <tr>
                <td>
                    <div>


                   <th>
                    Contact
                </th>
                {/* this is where the map function is called and will render the elements */}

                    <Row>
                    <span className="form-Adderess">
                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                        <input onChange={e => setPhoneInfo(e.target.value)} className="address" placeholder="Phone Number" type="text" required/>
                        <label>Phone Number<span style={{color: "red"}}>*</span></label>
                    </span>
                    <span className="form-Adderess">
                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                        <input onChange={(e) => setEmailInfo(e.target.value)} className="address" placeholder="Email Address" type="text" required/>
                        <label>Email Address<span style={{color: "red"}}>*</span></label>
                    </span>

                </Row>
                    </div>
                </td>
         </tr>
                <tr>
                    <td>
                        <Request/>
                    </td>
                </tr>
               <tr>
                   <td>
                       <header className="header_nav">
                           {/* Make the API call to google with the site key inorder to use the captcha */}
                           <div className="center">
                               <span className="g-recaptcha" data-sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL"
                               />
                           </div>
                           <nav>
                               <ul className="nav_links">
                                   <li><input type="checkbox" required/></li>
                                   <li>I certify this data is accurate under penalty of perjury<span
                                       style={{color: "red"}}>*</span></li>
                                   <li><button onClick={addContactInfo}>Submit</button></li>
                               </ul>
                           </nav>
                       </header>
                   </td>
               </tr>
        </div>
    );
}

export default Contact;
