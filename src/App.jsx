import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserList } from "./components/UserList/getuser";
import UserList from "./components/UserList/UserList";
import "./App.css";

function App() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const userData = await getUserList();
      console.log("in app funtn call", userData);
      
      setUserList( userData );
    })();
  }, []);
  console.log("userlist=", userList);


  return (
    <>
      <UserList userList={userList} setUserList={setUserList}/>
    </>
  );
}

export default App;
