import React, {useState} from "react";
import "./styles/App.css"
import "./styles/personal.css"
import "./styles/RequestQ.css"
import "./styles/address.css"
import "./styles/capthcaNav.css"
import { Container, Row } from 'reactstrap';
import states from "./States";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function CreateSelect(state){

    return (
        <option value={state.id}>{state.name}</option>
    );
}


const App = () => {
    var btn1

const [btnValue,setChecked] = useState(true)
const [certify, setCertify] = useState(false)


    // ----------------------------------------------------------
    // disables the submit button until the capactcha returns a value
    function setDis(value){
      btn1 = value
       if(btn1.length != 0 ){
           setChecked(false)
       }else if(btn1.length === 0){
           alert("Please confirm you are a human")
           setChecked(true)

       }
    }
    let contactForm = new FormData()
    let contactForm2 = new FormData()

    // the useState will retrieve the data that is put into the input
    // the useState returns 2 functions  the functions that represents the initial state and a function that is used to
    // set the altered state
    // ----------------------------------------------------------
        const [phoneInfo, setPhoneInfo] = useState("")
        const [emailInfo, setEmailInfo] = useState("")
        const [address1,setAddress1] = useState("")
        const [address2, setAddress2] = useState("")
        const [city, setCity] = useState("")
        const [zip, setZip] = useState("")
        const [dataReport, setReport] = useState(false)
        const [dataRetrival, setDataRetrival] = useState(false)
        const [dataPurge, setPurge] = useState(false)
        const [radio1, setRadio1] = useState(false)
        const [radio2, setRadio2] = useState(false)
        const [fName, setFname] = useState("")
        const [mName, setMname] = useState("")
        const [lName, setLname] = useState("")
        const [SSN, setSSn] = useState("")

    // ----------------------------------------------------------
    function formCreate(contactForm){

        contactForm.append('fName', fName)
        contactForm.append('mName', mName)
        contactForm.append('lName', lName)
        contactForm.append('SSN', SSN)
        contactForm.append('phoneInfo',phoneInfo)
        contactForm.append('emailInfo', emailInfo)
        contactForm.append('address', address1)
        contactForm.append('address2', address2)
        contactForm.append('city', city)
        contactForm.append('zip', zip)
        contactForm.append('ceritfy', certify)

        return contactForm
    }
    function formCreate2(contactForm2){
        contactForm2.append('radio1', radio1)
        contactForm2.append('radio2', radio2)
        contactForm2.append('dataReport', dataReport)
        contactForm2.append('dataPurge', dataPurge)
        contactForm2.append('dataRetrival', dataRetrival)

        return contactForm2
    }

const addContactInfo = (e) => {
    e.preventDefault()
    console.log(btn1)
    formCreate(contactForm)
    formCreate2(contactForm2)
    post2()

    // makes the POST request to the api url using the contact for
    async function post2(){
         await axios({
            method: 'post',
            url: 'http://localhost:8000/api/contact/',
            data: contactForm
        })
            .then((response) => {
                console.log(response)
                alert("Your request was submitted")
                document.getElementById("create-course-form").reset();
            })
    }
    async function post(){
         await axios({
            method: 'post',
            url: 'http://localhost:8000/api/data/',
            data: contactForm2
        })
            .then((response) => {
                console.log(response)
                alert("Your request was submitted")

            })
    }
    }
    // ----------------------------------------------------------
    // returns JSX to design the HTML form using tags similar to HTML tags
        return (
            <form id="create-course-form">
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
                                <input className="radioInput" type="radio" name="radio" onChange={ e => setRadio1(e.target.value)}/>
                                <label id="radioLabel" htmlFor="radio"> I am making this request on behalf of myself.</label>
                            </Row>
                            <Row>
                                <input className="radioInput" type="radio" name="radio" onChange={ e => setRadio2(e.target.value)}/>
                                <label id="radioLabel" htmlFor="radio">I am a legally qualified registered agent making this request for another.</label>
                            </Row>
                                    </td>
                                </tr>
                                <tr>
                 <td className="PersonData">
                     <div>
                         <th>
                            <Row>
                                Personal Details<span style={{color:"red"}}>*</span>
                            </Row>
                         </th>
                         {/* this is where the map function is called and will render the elements */}
                         <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setFname(e.target.value)} className="personal" type="text" placeholder="First Name" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setMname(e.target.value)} className="personal" type="text" placeholder="Middle Name" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setLname(e.target.value)} className="personal" type="text" placeholder="Last Name" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input  className="personal" type="date" placeholder="Date Of Birth" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setSSn(e.target.value)} className="personalData" type="text" placeholder="Last Four Digits of SSN" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                     </div>
                 </td>
             </tr>
             <tr >
                 <td>
                     <div className="input_group">
                     <th>
                    Address<span style={{color:"red"}}>*</span>
                      </th>
                         <span className="form-Adderess">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setAddress1(e.target.value)} value={address1.setAddress1} placeholder="Address One"  name="setAddress1" className="address" type="text" required/>
                             {/*<label>Address<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                     <span className="form-Adderess">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setAddress2(e.target.value)} name="setAddress1" placeholder="Address Two" className="address" type="text" />
                         {/*<label>Address two<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                     <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setCity(e.target.value)} name="setAddress1" placeholder="City" className="city" type="text" required/>
                         {/*<label>City<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                     <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setZip(e.target.value)} name="setAddress1" placeholder="Zip" className="city" type="text" required/>
                         {/*<label>Zip<span style={{color: "red"}}>*</span></label>*/}
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
                    Contact<span style={{color:"red"}}>*</span>
                </th>
                {/* this is where the map function is called and will render the elements */}

                    <Row>
                    <span className="form-Adderess">
                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                        <input onChange={e => setPhoneInfo(e.target.value)} className="address" placeholder="Phone Number" type="text" required/>
                        {/*<label>Phone Number<span style={{color: "red"}}>*</span></label>*/}
                    </span>
                    <span className="form-Adderess">
                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                        <input onChange={(e) => setEmailInfo(e.target.value)} className="address" placeholder="Email Address" type="text" required/>
                        {/*<label>Email Address<span style={{color: "red"}}>*</span></label>*/}
                    </span>

                </Row>
                    </div>
                </td>
         </tr>
                <tr>
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
                            <input onChange={e => setReport(e.target.checked)} type="CHECKBOX" id="requstCheck" />
                            <label className="requestLabel" >Personal data report</label>
                        </Row>
                         <Row>
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={e => setDataRetrival(e.target.checked)} type="CHECKBOX" id="requstCheck" />
                            <label className="requestLabel" >Personal data retrieval</label>
                        </Row>
                         <Row>
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={e => setPurge(e.target.checked)} type="CHECKBOX" id="requstCheck" />
                            <label className="requestLabel" >Personal data purge</label>
                        </Row>
                    </td>
                </tr>
               <tr>
                   <td>
                       <header className="header_nav">
                           {/* Make the API call to google with the site key inorder to use the captcha */}
                           <div className="center">
                               <ReCAPTCHA sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL" onChange={setDis}/>
                               {/*<span className="g-recaptcha" data-sitekey="6Lf5L1AcAAAAAN8BwFvZHoNTyURSo7e-IuskSdBL"
                               />*/}
                           </div>
                           <nav>
                               <ul className="nav_links">
                                   <li><input type="checkbox" onChange={e => setCertify(e.target.checked)}   required/></li>
                                   <li>I certify this data is accurate under penalty of perjury<span
                                       style={{color: "red"}}>*</span></li>
                                   <li><button disabled={btnValue} className="btn2"  onClick={addContactInfo}>Submit</button></li>
                               </ul>
                           </nav>
                       </header>
                   </td>
               </tr>
                    </table>
                </Container>
            </form>
        );
    }
export default App;