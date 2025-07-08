import React, { Component } from "react";
import './TodoList.css';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      error: ""
    };
  }

  handleChange = (e) => {
    this.setState({ task: e.target.value, error: "" }); // clear error on typing
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { task, tasks } = this.state;
    const trimmedTask = task.trim();

    if (trimmedTask === "") {
      this.setState({ error: "Please enter a Task." });
      return;
    }
    if (trimmedTask.length > 10) {
      this.setState({ error: "Task must be 10 characters or fewer." });
      return;
    }

    this.setState({
      tasks: [...tasks, trimmedTask],
      task: "",
      error: ""
    });
  };

  handleDelete = (indexToRemove) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((_, index) => index !== indexToRemove);
    this.setState({ tasks: updatedTasks });
  };

  render() {
    const { task, tasks, error } = this.state;

    return (
      <div className="TodoList-container">
        <h2>📝 To-Do List</h2>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task"
            value={task}
            onChange={this.handleChange}
          />
          <button type="submit" className="add">Add</button>
        </form>

        {/* Show error if present */}
        {error && <p className="error-message">{error}</p>}

        <ol>
          {tasks.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => this.handleDelete(index)} class="button">
                <span class="X"></span>
                <span class="Y"></span>
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default TodoList;
