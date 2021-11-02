import React, {useState} from "react";
import "./styles/App.css"
import "./styles/personal.css"
import "./styles/RequestQ.css"
import "./styles/address.css"
import "./styles/capthcaNav.css"
import { Container, Row } from 'reactstrap';
import states from "./States";
import ReCAPTCHA from "react-google-recaptcha";
import Success from "./Success";
import axios from "axios";

function CreateSelect(state){
    return (
        <option value={state.id}>{state.name}</option>
    );
}


const App = () => {
    // ----------------------------------------------------------
    var btn1
    const [btnValue,setChecked] = useState(true)
    const [certify, setCertify] = useState(false)
    const [sub, setSub] = useState(false)
    const [address1,setAddress1] = useState("")
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


    // ----------------------------------------------------------
    // disables the submit button until the capactcha returns a value
    function setDis(value){
      btn1 = value


       if(btn1.length != 0){
           setChecked(false)
       }else if(btn1.length === 0){
           alert("Please confirm you are a human")
           setChecked(true)

       }
    }

    // the useState will retrieve the data that is put into the input
    // the useState returns 2 functions  the functions that represents the initial state and a function that is used to
    // set the altered state
    // ----------------------------------------------------------

const AddContactInfo = async (e) => {
    e.preventDefault()
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
        address1: contact.address1,
        address2: contact.address2
  }
  console.log(userData)


    // makes the POST request to the api url using the contact for
         await axios({
            method: 'post',
            url: 'http://localhost:8000/api/contact/',
            data: userData
        })
            .then((response) => {
                console.log(response)
                document.getElementById("create-course-form").reset();
                setSub(true)
            })
             .catch(err =>{alert("This form was not posted. " + err)})
    }

    // ----------------------------------------------------------
    // returns JSX to design the HTML form using tags similar to HTML tags
        return (
            <form id="create-course-form">
                {/* the ternary that will show the success */}
                {
                    // the sub will set to true once the submission is successful
                    (sub) ? (
                        <Container>
                        <table>
                            <tr>
                                <td>
                                    {/* will lead to the success.js file upon successful completion of submit*/}
                                    <Success fName={contact.fName} lName={contact.lName} />
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
                                <input className="radioInput" type="radio" name="radio" onChange={ e => setDataMethods({...dataMethods, radio1: e.target.value})}/>
                                <label id="radioLabel" htmlFor="radio"> I am making this request on behalf of myself.</label>
                            </Row>
                            <Row>
                                <input className="radioInput" type="radio" name="radio" onChange={ e => setDataMethods({...dataMethods, radio2: e.target.value})}/>
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
                            <input onChange={ e => setContact({...contact, fName: e.target.value})} className="personal" type="text" placeholder="First Name" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setContact({...contact, mName: e.target.value})} className="personal" type="text" placeholder="Middle Name" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setContact({...contact, lName: e.target.value})} className="personal" type="text" placeholder="Last Name" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input  className="personal" type="date" placeholder="Date Of Birth" required/>
                            {/*<label>{pd.name}<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                          <span className="form-personal">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setContact({...contact, SSN: e.target.value})} className="personalData" type="text" placeholder="Last Four Digits of SSN" required/>
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
                            <input onChange={ e => setContact({...contact, address1: e.target.value})} value={address1.setAddress1} placeholder="Address One"  name="setAddress1" className="address" type="text" required/>
                             {/*<label>Address<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                     <span className="form-Adderess">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setContact({...contact, address2: e.target.value})} name="setAddress1" placeholder="Address Two" className="address" type="text" />
                         {/*<label>Address two<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                     <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setContact({...contact, city: e.target.value})} name="setAddress1" placeholder="City" className="city" type="text" required/>
                         {/*<label>City<span style={{color: "red"}}>*</span></label>*/}
                        </span>
                     <span className="form-City">
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={ e => setContact({...contact, zip: e.target.value})} name="setAddress1" placeholder="Zip" className="city" type="text" required/>
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
                        <input onChange={ e => setContact({...contact, phoneInfo: e.target.value})} className="address" placeholder="Phone Number" type="text" required/>
                        {/*<label>Phone Number<span style={{color: "red"}}>*</span></label>*/}
                    </span>
                    <span className="form-Adderess">
                        {/* when the event "e" is change it will call the function to get the data the useState*/}
                        <input onChange={ e => setContact({...contact, emailInfo: e.target.value})} className="address" placeholder="Email Address" type="text" required/>
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
                            <input onChange={e => setDataMethods({...dataMethods, dataReport: e.target.value})} type="CHECKBOX" id="requstCheck" />
                            <label className="requestLabel" >Personal data report</label>
                        </Row>
                         <Row>
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={e => setDataMethods({...dataMethods, dataRetrival: e.target.value})} type="CHECKBOX" id="requstCheck" />
                            <label className="requestLabel" >Personal data retrieval</label>
                        </Row>
                         <Row>
                            {/* when the event "e" is change it will call the function to get the data the useState*/}
                            <input onChange={e => setContact({...contact, dataMethods: e.target.value})} type="CHECKBOX" id="requstCheck" />
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
                                   <li><button disabled={btnValue} className="btn2"  onClick={AddContactInfo}>Submit</button></li>
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