import React from "react";
import { Row } from 'reactstrap';

const Success = (Name) => {


    return(
        <div>
            <th>
                Your request was successfully submitted
            </th>
            <Row>
                Thank you {Name.fName} {Name.lName}! We will get back to you as soon as possible.
            </Row>
        </div>
    );
}

export default Success;