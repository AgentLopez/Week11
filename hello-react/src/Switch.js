import { Component } from "react";


class Switch extends Component {

    constructor(){
        super()

        this.state = {
            choice: 'On'
        }
    }

    changeButton = () => {
        if (this.state.choice == "On") {
            this.setState({
                choice: "Off"
            })  
        } else {
            this.setState({
                choice: "On"
            })
        }
    }

render() {
    return (
        <button onClick={this.changeButton}>{this.state.choice}</button>
    )
}

}

export default Switch