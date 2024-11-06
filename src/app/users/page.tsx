"use client"
import React, { useState , useEffect } from 'react'
import UserContainer from '@/components/UserContainer';
import User from '@/types/user';
import http from '@/services/http';
import styles from '../../styles/User.module.css'

function Users() {
    const [users, setUsers] = useState<User[]|[]>([])
    useEffect(() => {
        const fetchDatabase = async () => {
            try {
                const db = await http.get('/users');
                const users: User[] = db.data?.data || [];
                setUsers(users);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };
        fetchDatabase();
    }, []);
    return (
        <div className={styles.users_container}>
            {users.map(user => (
                <UserContainer user={user} />
            ))}
        </div>
    )
}

export default Users;
