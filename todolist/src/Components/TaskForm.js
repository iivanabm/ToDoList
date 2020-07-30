import React from "react";
import styled from "styled-components";

const TaskFormContainer = styled.div`
   margin: 40px;
`;

class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            newTask: ""
        }
    }

    onChangeNewTask = event => {
        this.setState({ newTask: event.target.value });
    }

    onClickAddTask = () => {
        this.props.addTask(this.state.newTask);
        this.setState({ newTask: "" });
    }

    render() {
        return (
            <TaskFormContainer>

                <input
                    value={this.state.newTask}
                    onChange={this.onChangeNewTask} />
                <button onClick={this.onClickAddTask}>Add New Task</button>

            </TaskFormContainer>
        )
    };
};

export default TaskForm;