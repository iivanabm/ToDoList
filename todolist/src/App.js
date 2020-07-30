import React from "react";
import TaskForm from "./Components/TaskForm";
import TaskFilter from "./Components/TaskFilter";
import TaskList from "./Components/TaskList";
import styled from "styled-components";

const AppContainer = styled.div`
  border: 1px solid gray;
  width: 40vw;
  height: 95vh;
  margin-left: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 4em;
  color: blue;
`;

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskList: [{}],

      selectedFilter: ""
    }
  }

  addTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task,
      done: false
    }

    const taskCopy = [newTask, ...this.state.taskList];

    this.setState({ taskList: taskCopy });
  }

  alterFilter = (newFilter) => {
    this.setState({ selectedFilter: newFilter });
  }

  alterTask = (taskId) => {
    const newList = this.state.taskList.map(eachTask => {
      if (eachTask.id === taskId) {
        const taskCopy = { ...eachTask }
        taskCopy.done = !taskCopy.done
        return taskCopy;
      } else {
        return eachTask;
      }

      this.setState({ taskList: newList });
    })
  }

  render() {
    return (
      <AppContainer>
        <H1>To Do List</H1>
        <TaskForm addTask={this.addTask} />
        <TaskFilter selectedFilter={this.state.selectedFilter} alterFilter={this.alterFilter} />
        <TaskList taskListProps={this.state.taskList} selectedFilter={this.state.selectedFilter} alterTask={this.alterTask} />
      </AppContainer>
    )
  }
};

export default App;
