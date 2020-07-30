import React from "react";
import styled from "styled-components";

const TaskContainer = styled.li``;

const TaskNotDone = styled.span`
    text-decoration: none;
`;

const TaskDone = styled.span`
    text-decoration: line-through;
`;

class Task extends React.Component {
    onClickTask = () => {
        this.props.alterTask(this.props.taskInfo.id);
    }
    
    render() {
        return (
            <TaskContainer onClick={this.onClickTask}>
                {this.props.taskInfo.done ? (<TaskDone>{this.props.taskInfo.task}</TaskDone>) : (<TaskNotDone>{this.props.taskInfo.task}</TaskNotDone>)}
            </TaskContainer>
        )
    };
};

export default Task;