import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get('/api');
      setUsers(data);
    }
    getData();
  });

  return (
    <div className="App">
      {users.map((user) => {
        return <p key={user.id}>{user.name}</p>
      })}
    </div>
  );
}

export default App;
