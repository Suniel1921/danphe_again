import React, { useState, useEffect } from 'react';
import SideMenu from '../../sideMenu/SideMenu';
import './userDetails.css';
import { Table, Pagination, Spin, message } from 'antd';
import axios from 'axios';
import moment from 'moment'; 

const UserDetails = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalUsers, setTotalUsers] = useState(0);

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    const fetchUsers = async (page) => {
        setLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_URL}/api/v1/auth/all-users`);
            console.log(response)
            const allUsers = response.data.users;
            const paginatedUsers = allUsers.slice((page - 1) * 6, page * 6);

            setUsers(paginatedUsers);
            setTotalUsers(allUsers.length);
            setLoading(false);
        } catch (error) {
            message.error('Failed to load users');
            setLoading(false);
        }
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Status',
            dataIndex: 'isVerified',
            key: 'isVerified',
            render: (text) => (text ? 'Verified' : 'Not Verified'),
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (role) => (
                <span style={{ backgroundColor: role === 'admin' ? 'lightgreen' : 'transparent', padding: '4px', borderRadius: '4px' }}>
                    {role}
                </span>
            ),
        },
        {
            title: 'Date and Time',
            dataIndex: 'createdAt', // Change this to the correct field from your data
            key: 'createdAt',
            render: (date) => (
                <span>{moment(date).format('YYYY-MM-DD HH:mm:ss')}</span>
            ),
        },
    ];

    return (
        <>
            <div className='userDetailsContainer'>
                <div className="adminDashboard">
                    <div className="sideMenuContainer">
                        <SideMenu />
                    </div>
                    <div className='container'>
                        <div className="userDetails">
                            <h4>User Details</h4>
                            {loading ? (
                                <Spin size="large" />
                            ) : (
                                <>
                                    <Table 
                                        dataSource={users} 
                                        columns={columns} 
                                        pagination={false} 
                                        rowKey="_id" 
                                    />
                                    <Pagination 
                                        current={page} 
                                        total={totalUsers} 
                                        pageSize={6} 
                                        onChange={(page) => setPage(page)} 
                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDetails;
