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
           <h4 className="mt-3 mb-2" style={{color:"#ebc51d"}}><i class="fas fa-user"></i>{user.name}</h4>
           <p>
            <strong style={{color:"#240496"}}>{user.username}</strong>
            <br />
            <i class="far fa-envelope"></i> {user.email}
            <br />
            <i class="fas fa-phone"></i>{user.phone}
            <br/>
            <i class="fas fa-building"></i> {user.website}
            <br/>
           
           </p>
         </div>
       </div>
     </div>
     
)}
    </div>
  )
}

export default UserList
