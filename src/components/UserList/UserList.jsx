import React from 'react'
import "./UserList.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function UserList({userList,setUserList}) {
    console.log('component:',userList)

    const userDelete = async (userId) => {
      await axios.delete("https://jsonplaceholder.typicode.com/users/${userid}");
      console.log("deleted user", userId);
      setUserList(userList.filter((data) => data.id !== userId));
    };
    

  return (
    <div >
      <h3>User Details</h3>
  
    <ul>
      {userList?.map((data) => (
        <li key={data.id}>{data.name}<span className='icon' onClick={()=>userDelete(data.id)} > <FontAwesomeIcon icon={faTrash} /></span></li>
      ))}
    </ul>
  </div>
  )
}

export default UserList
