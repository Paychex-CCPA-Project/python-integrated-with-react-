import React, {useState} from "react";
import { Container, Row } from 'reactstrap';

const Success = (Name) => {


    return(
        <div>
            <th>
                Your request was successfully submitted
            </th>
            <Row>
                Thank you: {Name.fName} {Name.lName} we will get back to you as soon as possible
            </Row>
        </div>
    );
}

export default Success;