import React, { useState } from 'react';
import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },
    { id: 3, name: 'Charlie', age: 35 },
  ]);

  const handleEdit = (id) => {
    const newName = prompt('Enter new name:');
    const newAge = prompt('Enter new age:');

    if (newName !== null && newAge !== null) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === id ? { ...user, name: newName, age: parseInt(newAge) } : user
        )
      );
    }
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <span>
              {user.name} ({user.age} years old)
            </span>
            <button onClick={() => handleEdit(user.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
