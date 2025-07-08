import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/users/with-projects')
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="user-list">
      <h2>Users with Projects</h2>
      {users.map(user => (
        <div key={user._id} className="user-card">
          <h3>{user.name}</h3>
          <h3>{user.email}</h3>
          <ul>
            {user.projects.map(proj => (
              <li key={proj._id}>
                <strong>{proj.title}</strong>: {proj.description}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserList;
