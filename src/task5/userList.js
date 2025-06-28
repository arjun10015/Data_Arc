import React, { Component } from "react";
import './userList.css';

class UserList extends Component{
    constructor(props){
        super(props)

        this.state = {
            users: [],
            loading: true
        };
    }
    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => { 
            this.setState({users:data, loading:false});
        })
        .catch((err) => {
        console.error("Error fetching users:", err);
        this.setState({ loading: false });
      });
    }
    render(){
        const { users, loading } = this.state;
        return(
        <div className="user-list-container">
        <h2>👤 User List</h2>
         {loading ? (
          <p>Loading...</p>
        ):(<ol>
            {users.map((user) =>(
                <li keu={user.id}>
                    <strong>{user.name}</strong> -  {user.username} - {user.email}
                </li>
            ))}
        </ol>)}
      </div>
    );
  }
}
export default UserList;