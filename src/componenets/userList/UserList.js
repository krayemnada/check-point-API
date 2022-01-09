import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./UserList.css"
const UserList = () => {

    const [user, setUser] = useState([])
            useEffect(() => {
                axios.get ('https://jsonplaceholder.typicode.com/users')
                .then((res) => setUser(res.data))
                .catch(err => console.log(err));
                
            }, []) 
  return (
    <div >
      {user.map(user => 
     
     <div className='all'>
    
       <div className="single_feature">
         <div className="desc">
           <h4 className="mt-3 mb-2" style={{color:"#ebc51d"}}>{user.name}</h4>
           <p>
            <strong style={{color:"#240496"}}>{user.username}</strong>
            <br />
            {user.email}
            <br />
            {user.phone}
            {user.website}
           </p>
         </div>
       </div>
     </div>
     
)}
    </div>
  )
}

export default UserList
