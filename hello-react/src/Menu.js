import { Component } from "react";


export class Menu extends Component {
    render() {
        return (
            <div className = "wee">
            <div className="menu"><h1>HighOnCoding</h1></div> <div className="menu"><h2><b>Home</b></h2></div> <div className="menu"><h2>Categories</h2></div>
            </div>
        )
    }
}

export class Footer extends Component {
    render() {
        return (
            <h1>Footer</h1>
        )
    }
}


// export default Menu