import { Component } from "react";


class FriendsList extends Component {
    render() {
        const peps = this.props.friends.map((friend, index) => {
            return <li key = {index}>{friend.name}</li>
        })
        return (
            <div>
<h1>Friends:</h1>
<ul>
{peps}

</ul>

            </div>
        )
    }
}

export default FriendsList