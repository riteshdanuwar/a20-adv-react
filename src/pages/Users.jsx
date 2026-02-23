// import React from 'react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";

export const BASEURL = "https://jsonplaceholder.typicode.com";
const Users = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId,setEditId] = useState(null);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const result = await axios.get(`${BASEURL}/users`);
        //  console.log(result.data,"-----");
        setUsers(result.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  }, []);

  console.log(users, "users");

  return (
    <div>
      {showForm && <UserForm editId={editId} users={users}/>}
      {users.map((user) => {
        return (
          <UserCard
            key={user.id}
            userDetail={user}
            setUsers={setUsers}
            setShowForm={setShowForm}
            setEditId={setEditId}
          />
        );
      })}
    </div>
  );
};

export default Users;
