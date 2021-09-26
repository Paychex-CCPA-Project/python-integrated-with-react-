import React, {Component} from "react";
import {Row,Col } from 'reactstrap';


class ReCAPTCHA extends Component{
    state = {
        term:" ",
        seen: false
    }
    handleChange = event =>{
        this.setState({
            term: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    handleFormSubmit(term) {

    }

    render(){
        // this function will render the jsx tags
    return (
            <div className="captchaDiv">
                <form onSubmit={this.handleSubmit}>
                </form>

            </div>

        );
    }
}

export default ReCAPTCHA;


