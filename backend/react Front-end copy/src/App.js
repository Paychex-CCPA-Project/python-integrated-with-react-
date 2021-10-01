import React, {Component,useCallback, useState} from "react";
import Personal from "./personal";
import Address from "./Address";
import RequestQ from "./RequestQ";
import Contact from "./Contact";
import Request from "./Request";
import "./styles/address.css"
import "./styles/capthcaNav.css"
import { Container, Row } from 'reactstrap';
import axios from "axios";

class App extends Component{

    state = {
        ad1: "",
    }
    handleCallBack = (childData) => {
        this.setState({ad1:childData})
    }

    handleSubmit = event => {
        event.preventDefault();
        alert("The Request has been submitted")
        setTimeout(() => {
         console.log("error: the session has timed out")
       }, 3000)

    };

    render()
    {
        return (
            <form onSubmit={this.handleSubmit} method="POST">
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
                                <RequestQ/>
                            </td>
                        </tr>
                        <tr>
                            <td className="PersonData">
                                <Personal/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Address/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Contact/>
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
                                            <li><input type="submit" value="Submit"/></li>
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

}


export default App;
