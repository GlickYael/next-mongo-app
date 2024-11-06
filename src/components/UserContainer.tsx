"use client"
import React from 'react'
import User from '../types/user'
import styles from '../styles/User.module.css'

interface UserContainerProps {
    user: User;
}

const UserContainer: React.FC<UserContainerProps> = ({ user }) => {
    
    return (
        <div className={styles.user_container}>
            <h2 className={styles.user_name}>{user.name}</h2>
        </div>
    );
}

export default UserContainer;



