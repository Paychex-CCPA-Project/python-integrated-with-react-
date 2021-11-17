import React, {useState} from "react";
import "./styles/App.css"
import "./styles/personal.css"
import "./styles/RequestQ.css"
import "./styles/address.css"
import "./styles/capthcaNav.css"
import {Container, Row} from 'reactstrap';
import states from "./States";
import ReCAPTCHA from "react-google-recaptcha";
import Success from "./Success";
import axios from "axios";

function CreateSelect(state) {
    return (
        <option value={state.id}>{state.name}</option>
    );
}

const App = () => {
    // the useState will retrieve the data that is put into the input
    // the useState returns 2 functions  the functions that represents the initial state and a function that is used to
    // set the altered state
    // ----------------------------------------------------------
    var btn1
    // the error messages will be pushed into the error array like a stack
    let error = []
    const [btnValue, setChecked] = useState(true)
    const [certify, setCertify] = useState(false)
    const [sub, setSub] = useState(false)
    const [address1, setAddress1] = useState("")
    const [dataMethods, setDataMethods] = useState({
        radio1: false,
        radio2: false,
        dataReport: false,
        dataPurge: false,
        dataRetrival: false
    })
    const [contact, setContact] = useState({
        fName: "",
        lName: "",
        mName: "",
        emailInfo: "",
        phoneInfo: "",
        city: "",
        SSN: "",
        zip: "",
        address1: "",
        address2: "",
        dataMethods: {
            radio1: dataMethods.radio1,
            radio2: dataMethods.radio2,
            dataReport: dataMethods.dataReport,
            dataRetrival: dataMethods.dataRetrival,
            dataMethods: dataMethods.dataPurge
        }
    })
    console.log(certify)
    // ----------------------------------------------------------
    // disables the submit button until the captcha returns a value

    const setDis = async (value) => {
        var btn = value
        btn1 = btn
        console.log(btn)
        if (btn1.length != 0) {
            setChecked(false)
        } else if (btn1.length === 0) {
            alert("Please confirm you are a human")
            setChecked(true)

        }
    }
    // ----------------------------------------------------------
    // this function will check if the input fields are empty
    // if the inputs are empty the validForm variable will change to false not allowing the form to post
    // validates the email
     const validateEmail = () =>{
        let validForm = true
        var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        if (contact.emailInfo === "") {
                validForm = false
                error.push("Email address is not filled in")
                let email = document.getElementById("EMAIL")
                email.id = "validateInput"
        }else if(contact.emailInfo.match(regexEmail)) {
            validForm = true
        }else{
            validForm = false
            error.push("Email he email is not valid")
            let email = document.getElementById("EMAIL")
            email.id = "validateInput"
        }
        return validForm
    }
    // ----------------------------------------------------------
    // validates the rest of the form
    const validateForm = () => {
        let validForm = true
        var checkBox = document.getElementsByName("check1")

        if (contact.fName === "") {
            validForm = false
            error.push("First Name is not filled in")
            let FNAME = document.getElementById("FNAME")
            FNAME.id = "validateInput"
        }
        if (contact.mName === "") {
            validForm = false
            error.push("Middle Name is not filled in")
            let MNAME = document.getElementById("MNAME")
            MNAME.innerHTML = "Middle Name is not filled in"
            MNAME.id = "validateInput"
        }
        if (contact.lName === "") {
            validForm = false
            error.push("Last Name is not filled in")
            let LNAME = document.getElementById("LNAME")
            LNAME.id = "validateInput"
        }
        if (contact.address1 === "") {
            validForm = false
            error.push("Address is not filled in")
            let ad1 = document.getElementBId("ad1")
            ad1.id = "validateInput"
        }
        if (contact.phoneInfo === "") {
            validForm = false
            error.push("Phone Number is not filled in")
            let phone = document.getElementById("PHONE1")
            phone.id = "validateInput"
        }
        if (contact.zip === "") {
            validForm = false
            error.push("Zip code is not filled in")
            let zip = document.getElementById("ZIP")
            zip.id = "validateInput"
        }
        if (contact.SSN === "") {
            validForm = false
            error.push("SSN is not filled in")
            let SSN = document.getElementById("SSN")
            SSN.id = "validateInput"
        }
        if (contact.city === "") {
            validForm = false
            error.push("City is not filled in")
            let city = document.getElementById("CITY")
            city.id = "validateInput"
        }
        // checks if any checkboxes have been selected
        var okay = false
        for (var i = 0; i < checkBox.length; i++) {
            if (checkBox[i].checked) {
                okay = true
                break;
            }
        }
        if (!okay) {
            error.push("at least 1 check box needs to be checked")
            let checkbox = document.getElementById("checks")
            checkbox.id = "validateChecks"
            validForm = false
        }
        return validForm
    }
    // ----------------------------------------------------------
    // async function that post the collected user data or prints error messages to the screen
    const AddContactInfo = async (e) => {
        // prevents the form from falling into default

        e.preventDefault()
        // ----------------------------------------------------------
        // will post if the validate form function is true
        if (validateForm() && validateEmail()) {
            let dataMeothds = {
                radio1: dataMethods.radio1,
                radio2: dataMethods.radio2,
                dataReport: dataMethods.dataReport,
                dataRetrival: dataMethods.dataRetrival,
                dataMethods: dataMethods.dataPurge

            }
            const userData = {
                dataMeothds,
                fName: contact.fName,
                lName: contact.lName,
                mName: contact.mName,
                emailInfo: contact.emailInfo,
                phoneInfo: contact.phoneInfo,
                city: contact.city,
                SSN: contact.SSN,
                zip: contact.zip,
                address: contact.address1,
                address2: contact.address2
            }
            // makes the POST request to the api url using the contact for
            await axios({
                method: 'post',
                url: 'http://localhost:8000/api/contact/',
                data: userData
            })
                .then((response) => {
                    console.log(response)
                    document.getElementById("create-course-form").reset();
                    // sets the true if the submit works. function will cause the successful submission page to render
                    setSub(true)
                })
                .catch(err => {
                    if (err.response) {
                        console.log(err.response)
                    } else if (err.request) {
                        alert(err.request)
                    } else {
                        alert('error: ' + err)
                    }
                })
        } else {
            // will print out all error messages that will tell users what they have not filled out
            alert(Array.from(error))


        }
    }

    // ----------------------------------------------------------
    // returns JSX to design the HTML form using tags similar to HTML tags
    return (
        <form id="create-course-form" novalidate="" autocomplete="off" class="form">
            {/* the ternary that will show the success */}
            {
                // the sub will set to true once the submission is successful
                (sub) ? (
                    <Container>
                        <table>
                            <tr>
                                <td>
                                    {/* will lead to the success.js file upon successful completion of submit*/}
                                    <Success fName={contact.fName} lName={contact.lName}/>
                                </td>
                            </tr>
                        </table>
                    </Container>) : (


                    <Container fluid>

                        {/*creates the table for the form app*/}
                        <table>
                            <tr>
                                {/*sections off the table for the components of the form*/}
                                <td>
                                    <Row>

                                        Personal Information Request Form
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Row className="required">
                                        Please select one of the following.
                                    </Row>
                                    <Row>
                                        <input className="radioInput" type="radio" name="radio"
                                               onChange={e => setDataMethods({
                                                   ...dataMethods,
                                                   radio1: e.target.value
                                               })}/>
                                        <label id="radioLabel" htmlFor="radio"> I am making this request on behalf of
                                            myself.</label>
                                    </Row>
                                    <Row>
                                        <input className="radioInput" type="radio" name="radio"
                                               onChange={e => setDataMethods({
                                                   ...dataMethods,
                                                   radio2: e.target.value
                                               })}/>
                                        <label id="radioLabel" htmlFor="radio">I am a legally qualified registered agent
                                            making this request for another.</label>
                                    </Row>
                                </td>
                            </tr>
                            <tr>
                                <td className="PersonData">

                                    <div>
                                        <th>
                                            <Row>
                                                Personal Details<span style={{color: "red"}}>*</span>
                                            </Row>
                                        </th>
                                        {/* this is where the map function is called and will render the elements */}
                                        <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, fName: e.target.value})}
                                                   className="personal" id="FNAME" type="text" placeholder="First Name"
                                                   required/>

                        </span>
                                        <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, mName: e.target.value})}
                                                   className="personal" type="text" id="MNAME" placeholder="Middle Name"
                                                   required/>

                        </span>
                                        <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, lName: e.target.value})}
                                                   className="personal" type="text" id="LNAME" placeholder="Last Name"
                                                   required/>
                        </span>
                                        <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input className="personal" type="date" placeholder="Date Of Birth"
                                                   required/>
                        </span>
                                        <span className="form-personal">
                              {/*SSN*/}
                                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, SSN: e.target.value})}
                                                   className="personalData" type="text" id="SSN"
                                                   placeholder="Last Four Digits of SSN" maxLength="4" required/>
                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="input_group">
                                        <th>
                                            Address<span style={{color: "red"}}>*</span>
                                        </th>
                                        <span className="form-Adderess">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, address1: e.target.value})}
                                                   value={address1.setAddress1} placeholder="Address One" id="ad1"
                                                   name="setAddress1" className="address" type="text" required/>

                        </span>
                                        <span className="form-Adderess">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, address2: e.target.value})}
                                                   name="setAddress1" placeholder="Address Two" className="address"
                                                   type="text"/>

                        </span>
                                        <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, city: e.target.value})}
                                                   name="setAddress1" placeholder="City" className="city" id="CITY"
                                                   type="text" required/>

                        </span>
                                        <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                                            <input onChange={e => setContact({...contact, zip: e.target.value})}
                                                   name="setAddress1" placeholder="Zip" className="city" id="ZIP"
                                                   type="text" required/>

                        </span>
                                        {/*<label style={{color: "black"}} id="selectID" htmlFor="statesSelect">State</label>*/}
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
                                            Contact<span style={{color: "red"}}>*</span>
                                        </th>
                                        {/* this is where the map function is called and will render the elements */}

                                        <Row>
                    <span className="form-Adderess">
                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                        <input onChange={e => setContact({...contact, phoneInfo: e.target.value})} className="address"
                               placeholder="Phone Number" id="PHONE1" type="text" maxLength="10" required/>

                    </span>
                                            <span className="form-Adderess">
                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                                                <input
                                                    onChange={e => setContact({...contact, emailInfo: e.target.value})}
                                                    className="address" placeholder="Email Address" id="EMAIL"
                                                    type="text" required/>

                    </span>

                                        </Row>
                                    </div>
                                </td>
                            </tr>

                            <tr id="checks">
                                <td>
                                    <th>
                                        Request Type
                                    </th>
                                    {/* */}
                                    <Row className="required">
                                        Please select the reason(s) for this request.
                                    </Row>
                                    <Row>
                                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                                        <input
                                            onChange={e => setDataMethods({...dataMethods, dataReport: e.target.value})}
                                            type="CHECKBOX" id="requstCheck" name="check1"/>
                                        <label className="requestLabel">Personal data report</label>
                                    </Row>
                                    <Row>
                                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                                        <input onChange={e => setDataMethods({
                                            ...dataMethods,
                                            dataRetrival: e.target.value
                                        })} type="CHECKBOX" id="requstCheck" name="check1"/>
                                        <label className="requestLabel">Personal data retrieval</label>
                                    </Row>
                                    <Row>
                                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                                        <input onChange={e => setContact({...contact, dataMethods: e.target.value})}
                                               type="CHECKBOX" id="requstCheck" name="check1"/>
                                        <label className="requestLabel">Personal data purge</label>
                                    </Row>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <header className="header_nav">
                                        {/* Make the API call to google with the site key inorder to use the captcha */}
                                        <div className="center">
                                            <ReCAPTCHA sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL"
                                                       onChange={setDis}/>
                                            {/*<span className="g-recaptcha" data-sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL"
                               />*/}
                                        </div>
                                        <nav>
                                            <ul className="nav_links">
                                                <li><input type="checkbox" onChange={e => setCertify(e.target.checked)}
                                                           required/></li>
                                                <li>I certify this data is accurate under penalty of perjury<span
                                                    style={{color: "red"}}>*</span></li>
                                                <li>
                                                    <button disabled={btnValue} className="btn2"
                                                            onClick={AddContactInfo}>Submit
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </header>
                                </td>
                            </tr>
                        </table>
                    </Container>)
            }
        </form>
    );
}
export default App;