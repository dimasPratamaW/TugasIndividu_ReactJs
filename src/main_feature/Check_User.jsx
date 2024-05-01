import useSWR from 'swr'
import axios from 'axios'
import {The_Chosen_User} from './State_Store'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Input, Button, Space, Popconfirm } from 'antd';

const fetcher = url => axios.get(url).then(res => res.data)

function TheChosenOne() {
  const { id, updateId } = The_Chosen_User();
  const [email, setEmail] = useState("");
  const [detailUser, setDetailUser] = useState({});
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  function onChangeEmail(event) {
    setEmail(event.target.value)
  }

  function onSubmit() {
    const user = data.find((item) => item.email === email);
    if (user) {
      setDetailUser(user);
      updateId(user.id);
      console.log(id); // This will log the previous id, not the updated one
    }
  }

  return (
    <>
      <label>Input Email : </label>
      <Space>
      <Input onChange={onChangeEmail} placeholder="Enter email" type='email'/>
      <Popconfirm title="Are you sure wanna search this email ?" okText="Yes" cancelText="No"></Popconfirm>
      <Button onClick={onSubmit}>Submit</Button>
      </Space>
      <div>
        <p>Name: {detailUser.name}</p>
        <p>ID: {id}</p>
      </div>
    </>
  );
}


export default function CheckUser() {
  return (
    <>
      <TheChosenOne />
    </>
  )
}
