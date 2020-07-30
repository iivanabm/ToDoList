import React from "react";
import Task from "./Task";
import styled from "styled-components";

const TaskListContainer = styled.div``;

class TaskList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const filteringList = this.props.taskListProps.filter((eachTask) => {
            switch (this.props.selectedFilter) {
                case "finished":
                    return eachTask.done;

                case "unfinished":
                    return !eachTask.done;

                default:
                    return true;
            }

        });

        const tasksList = filteringList.map(eachTask => {
            return <Task alterTask={this.props.alterTask} taskInfo={eachTask} key={eachTask.id} />;
        });
        return (
            <TaskListContainer>
                <ul>
                    {tasksList}
                </ul>
            </TaskListContainer>
        )
    };
};

export default TaskList;