import React from "react";
import {Row} from "reactstrap";


// this function will render the jsx tags
function RequestQ(){


    function agent(){
        console.log("agent was clicked ")
    }
    function myself(){
        console.log("myself was clicked")
    }

    return (
        <div>
                <Row className="required">
                    Please select one of the following.
                </Row>
                    <Row>
                        <input className="radioInput" type="radio" name="radio" onClick={myself}/>
                        <label id="radioLabel" htmlFor="radio"> I am making this request on behalf of myself.</label>
                    </Row>
                    <Row>
                        <input className="radioInput" type="radio" name="radio" onClick={agent}/>
                        <label id="radioLabel" htmlFor="radio">I am a legally qualified registered agent making this request for another.</label>
                    </Row>
        </div>
    );
}

export default RequestQ;
