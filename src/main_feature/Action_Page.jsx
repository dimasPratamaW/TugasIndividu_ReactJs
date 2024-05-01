
import { Space, Table, Tabs } from 'antd';
import { useEffect, useState } from 'react';
import CheckUser from './Check_User';
import { Post_Data } from './State_Store';
import Update_Content from './Update_Content';
import Delete_Content from './Delete_Content';

function List_Post() {
    const { listPost, fetchPost } = Post_Data.getState();

    const columns = [
        {
            title: 'ID Post',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Title Post',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Post',
            dataIndex: 'body',
            key: 'body',
        },
    ];


    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <div>
            <Table columns={columns} dataSource={listPost} />
        </div>
    );
}

function Action_Page() {
    const [action, setAction] = useState("Check User");
    const [idAction, setidAction] = useState(1);

    const listAction = [
        { id: 1, actionUser: "Check User" },
        { id: 2, actionUser: "Update Content" },
        { id: 3, actionUser: "Delete Content" }
    ];

    const onChange = (key) => {
        setAction(key);
        console.log("New action:", key);
        setidAction(listAction.find((item) => item.actionUser === key).id)
    };

    function UserChooseAction(theAction) {
        if (theAction === "Check User") {
            return (
                <>
                    <CheckUser />
                </>
            )
        }
        if (theAction === "Update Content") {
            return (
                <>
                    <Update_Content />
                </>
            )
        }
        if (theAction === "Delete Content") {
            return (
                <>
                    <Delete_Content />
                </>
            )
        }
    }

    return (
        <>
            <Tabs
                onChange={onChange}
                type="card"
                items={listAction.map((item) => ({
                    label: item.actionUser,
                    key: item.actionUser,
                    children: UserChooseAction(item.actionUser),
                }))}
                
            />
            <List_Post />
        </>
    );
}

export default Action_Page;
