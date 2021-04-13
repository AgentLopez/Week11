import { Component } from "react";


class Form extends Component {

constructor(){
    super()
this.state = {
    name: '',
    fav: ''
}
}

showTheStuff = () => {
    
}

handleChange = (e) => {
this.setState({
    [e.target.name]: e.target.value
})
}


    render() {
        return (
<div>
<input type="text" name="name" onChange={this.handleChange} placeholder="Name" />
<input type="text" name="fav" onChange={this.handleChange} placeholder="Favorite Place" />
<button onClick={this.showTheStuff}>Submit</button>
{this.state.name} {this.state.fav}

</div>
        )
    }

}

export default Form