
import './App.css';
import axios from 'axios'
import { useState } from 'react';


const api = axios.create({
  baseURL : 'https://jsonplaceholder.typicode.com/users'
})

  

function App() {
  
  const [users,setUsers] = useState(
    users = []
  )
 
    constructor() {
      super ();
      api.get('/').then(res => {
        console.log(res.data)
        setUsers({users: res.data})
      })
    }
  
  return (
    <div className="App">
 {setUsers.users.map(user => <h1 key={user.id}>{user.title}</h1>
  )}
    </div>
  );
}

export default App;
