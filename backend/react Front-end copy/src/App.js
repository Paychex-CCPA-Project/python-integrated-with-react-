import React, {Component,useCallback, useState} from "react";
import Personal from "./personal";
import Address from "./Address";
import RequestQ from "./RequestQ";
import Contact from "./Contact";
import Request from "./Request";
import "./styles/address.css"
import "./styles/capthcaNav.css"
import { Container, Row } from 'reactstrap';

function App() {
        return (
            <form>
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
                                <Contact/>
                    </table>
                </Container>
            </form>
        );
    }
export default App;
