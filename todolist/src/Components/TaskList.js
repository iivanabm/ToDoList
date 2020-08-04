import React from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import styled from "styled-components";

const TaskContainer = styled.div`
    width: 300px;
    color: #3f51b5;
    font-size: 1.6em;
    display: flex;
    align-items: center;
    margin: 5%;
`;

const StyledDeleteIcon = styled(DeleteIcon)`
    cursor: pointer;
`;


class TaskList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const allTasks = this.props.taskList.map((eachTask) => {
            return <TaskContainer>
                <span>{eachTask.task}</span>
                <StyledDeleteIcon color="secondary" onClick={() => this.props.deleteTask(eachTask.id)} />
            </TaskContainer>
        });
        return (
            <div>
                {allTasks}
            </div>
        )