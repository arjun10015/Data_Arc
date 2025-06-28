//import logo from './logo.svg';
//import './App.css';
//import Task2 from './task2/Task2.js';
//import './task2/Task2.css'
//import Task1 from './task1/task1.js';
//import './task1/task1.css';
//import LikeButton from './task3/Likebutton.js';
//import Form from './task3/Form.js';
//import TodoList from './task4/TodoList.js';
import UserList from './task5/userList.js';

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Task1/>
       <Task2/>
       <Form/>
       <LikeButton/>
       <TodoList/>*/}
       <UserList/>
      </header>
    </div>
  );
}
export default App;
