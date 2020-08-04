import React from "react";
import TaskForm from "./Components/TaskForm";
import styled from "styled-components";
import TaskList from "./Components/TaskList";

const AppContainer = styled.div`
  border: 1px solid gray;
  width: 40vw;
  height: 95vh;
  margin-left: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E0EEE0;
`;

const H1 = styled.h1`
  font-size: 4em;
  animation-name: todolist;
  animation-duration: 3s;
  animation-iteration-count: infinite;

  @keyframes todolist{
    from{
      color: purple;
    }
    to{
      color: #CD1076;
    }
  };
`;


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      taskList: [],
      newTask: ""
    }
  }

  addTask = (task) => {
    const newTask = {
      id: Date.now(),
      task: task
    }

    const taskCopy = [newTask, ...this.state.taskList];

    this.setState({ taskList: taskCopy });
  }

  deleteTask = (taskId) => {
    const newTaskList = this.state.taskList.filter((eachTask) => {
      return taskId !== eachTask.id
    })
    this.setState({ taskList: newTaskList })
  }


  render() {
    return (
      <AppContainer>
        <H1>To Do List</H1>
        <TaskForm addTask={this.addTask} />
        <TaskList taskList={this.state.taskList} deleteTask={this.deleteTask} />
      </AppContainer>
    )
  }
};


export default App;
