import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = { tasks: [], text: "" };

  addTask = () => {
    if (!this.state.text.trim()) return;
    this.setState({
      tasks: [...this.state.tasks, { text: this.state.text, done: false }],
      text: ""
    });
  };

  render() {
    const { tasks, text } = this.state;
    const done = tasks.filter(t => t.done).length;

    return (
      <div className="app">
        <h1>To-Do App</h1>

        <div className="input-box">
          <input
            value={text}
            placeholder="Enter a task..."
            onChange={e => this.setState({ text: e.target.value })}
          />
          <button onClick={this.addTask}>Add</button>
        </div>

        <h4>{done} of {tasks.length} tasks done</h4>

        {tasks.length === 0 ? <p>No tasks yet. Add one!</p> :
          tasks.map((t, i) => (
            <div className="task" key={i}>
              <span className={t.done ? "done" : ""}
                onClick={() => this.setState({
                  tasks: tasks.map((x, j) =>
                    i === j ? { ...x, done: !x.done } : x)
                })}>
                {t.text}
              </span>
              <button onClick={() => this.setState({
                tasks: tasks.filter((_, j) => i !== j)
              })}>Delete</button>
            </div>
          ))}
      </div>
    );
  }
}

export default App;