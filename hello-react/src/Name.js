import React, { Component } from "react";


class Name extends Component {
    render () {
        return(
            <h1>{this.props.lname}, {this.props.fname}</h1>
        )
    }
}

export default Name