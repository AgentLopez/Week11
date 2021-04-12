import React, { Component } from "react";


class TaskList extends Component {
    render () {

        const allTaks = this.props.tasks.map((task) => {
            return <li>{task.name}</li>
        })
        return (
            <div>
            <h1>Task List</h1>
            <ul>
            {allTaks}

            </ul>
            
            </div>
        )
    }
}

export default TaskList