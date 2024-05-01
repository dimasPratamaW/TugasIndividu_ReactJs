
import { useState } from 'react';
import { Input, Button, Space, Popconfirm } from 'antd';
import { Post_Data } from './State_Store';



function ChooseToUpdate() {
  const [idPost, updateIdPost] = useState("");
  const [title, setTitle] = useState("");

  const { updatePost } = Post_Data();

  function onChangeTitle(event) {
    setTitle(event.target.value)
    
  }

  function chosenIdPost(event) {
    updateIdPost(event.target.value)
  }

  function onSubmit() {
    console.log(title); 
    updatePost(idPost);
    console.log(idPost); 
  }

  return (
    <>
      <label>Input </label>
      <Space>
      <Input onChange={chosenIdPost} placeholder="Enter Post ID you wanna change"/>
      <Input onChange={onChangeTitle} placeholder="Enter New Title"/>
      <Popconfirm title="Are you sure you want to delete this user?" okText="Yes" cancelText="No" onConfirm={onSubmit}>
      <Button>Submit</Button>
      </Popconfirm>
      </Space>
    </>
  );
}


export default function Update_Content() {
  return (
    <>
      <ChooseToUpdate />
    </>
  )
}
