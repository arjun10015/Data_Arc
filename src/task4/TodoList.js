import React, { Component } from "react";
import './TodoList.css'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: []
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, tasks } = this.state;
    if (task.trim() === "") return;

    this.setState({
      tasks: [...tasks, task],
      task: "" 
    });
  };

  handleDelete = (indexToRemove) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const{task,tasks} = this.state
    return (
      <div className="TodoList-container" >
        <h2>📝 To-Do List</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={this.handleChange}
          />
          <button type="submit">Add</button>
        </form>

        <ol >
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button  onClick={() => this.handleDelete(index)}>❌</button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default TodoList;
