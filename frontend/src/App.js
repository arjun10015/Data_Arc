//import logo from './logo.svg';
//import './App.css';
//import Task2 from './task2/Task2.js';
//import Task1 from './task1/task1.js';
//import './task1/task1.css';
//import LikeButton from './task3/Likebutton.js';
//import Form from './task3/Form.js';
//import TodoList from './task4/TodoList.js';
//import UserList from './task5/userList.js';
//import Portfolio from './task6/portfolio.js';

//week2
import DynamicForm from "./week2/Frontend/task1/dynamicForm.js";
import formSchema from "./week2/Frontend/task1/formSchema.js";
import Dashboard from "./week2/Frontend/task2/Dashboard";
import { ThemeProvider } from './week2/Frontend/task3/ThemeContext.js';
import ThemeToggle from './week2/Frontend/task3/Togglebutton.js';

//backend - frontend
import UserList from './multi-model-frontend/UserList.js'; 


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
    <ThemeProvider>
    <div className="App">
      <DynamicForm schema={formSchema} />
       <ThemeToggle />
       
       
       {/*week2
        <DynamicForm schema={formSchema} />
        <Dashboard/>
        <h1>Multi-Model API Frontend</h1>
      <UserList />
       */} 
         
        
        {/* week1
       <Task1/>
       <Task2/>
       <Form/>
       <LikeButton/>
       <TodoList/>
       <UserList/>
       <Portfolio/>*/}
       
    </div>
    </ThemeProvider>
  );
}
export default App;
