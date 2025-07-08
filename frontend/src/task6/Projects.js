import React, { Component } from "react";
import "./styles.css";

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/arjun10015/a5f868f68e22495a4963c535ddbe4986/raw/00f973c7a73b701cdab5ee09e25a0aa8a524e5c9/project.json")
      .then((res) => res.json())
      .then((data) => this.setState({ projects: data }))
      .catch((err) => console.error("Failed to fetch projects:", err));
  }

  render() {
    return (
      <section className="projects-section">
        <h2>My Projects</h2>
        <ul>
          {this.state.projects.map((proj) => (
            <li key={proj.id}>
              <strong>{proj.name}</strong> – {proj.description}<br />
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Projects;
