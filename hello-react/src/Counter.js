import { Component } from "react";


class Counter extends Component {

    constructor() {
        super()

        this.state = {
            counter: 0
        }
    }

    handleminus = () => {
this.setState({
    counter: this.state.counter - 1
})
    }

    handleIncrement = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    render() {
        return (
            <div>
                
                <h1><button onClick={this.handleIncrement}>+</button>{this.state.counter}<button onClick={this.handleminus}>-</button></h1>
            </div>
        )
    }
}

export default Counter