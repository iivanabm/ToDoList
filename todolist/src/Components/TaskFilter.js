import React from "react";
import styled from "styled-components";

const TaskFilterContainer = styled.div`
    margin-bottom: 20px;
`;

class TaskFilter extends React.Component {
    constructor(props) {
        super(props)
    }

    onChangeSelect = (event) => {
        this.props.alterFilter(event.target.value);
    }

    render() {
        return (
            <TaskFilterContainer>
                <span>Filter&nbsp;&nbsp;&nbsp;</span>
                <select value={this.props.selectedFilter} onChange={this.onChangeSelect}>
                    <option value="">None</option>
                    <option value="unfinished">Unfinished</option>
                    <option value="finished">Finished</option>
                </select>
            </TaskFilterContainer>
        )
    };
};

export default TaskFilter;