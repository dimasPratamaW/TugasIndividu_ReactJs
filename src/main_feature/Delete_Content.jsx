import { useState } from 'react';
import { Button, Input, Popconfirm, Space } from 'antd';
import { Post_Data } from './State_Store';

export default function Delete_Content() {
  const {  deletePost, deletePostRekayasa } = Post_Data();
  const [idPost, setUserId] = useState(0);

  const handleDelete = async () => {
    try {
      await deletePost(idPost);
      deletePostRekayasa(idPost);
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  const handleInputChange = (event) => {
    setUserId(event.target.value);
  };

  return (
    <>
      <Space>
        <Input onChange={handleInputChange} placeholder="Enter user ID" type="number" />
        <Popconfirm title="Are you sure you want to delete this user?" okText="Yes" cancelText="No" onConfirm={handleDelete}>
          <Button>Delete</Button>
        </Popconfirm>
      </Space>
    </>
  );
}
