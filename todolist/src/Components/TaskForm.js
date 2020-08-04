import React from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const TaskFormContainer = styled.div`
   margin: 10px;
`;

const StyledButton = styled(Button)`
    position: absolute;
    top: 30%;
    left: 5%;
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

                <TextField
                    id="outlined-error"
                    label="Task"
                    margin="normal"
                    variant="outlined"
                    placeholder="Type your task"
                    value={this.state.newTask}
                    onChange={this.onChangeNewTask} />
                <StyledButton variant="contained" color="primary" disableRipple onClick={this.onClickAddTask}>Add</StyledButton>

            </TaskFormContainer>
        )
    };
};

export default TaskForm;
