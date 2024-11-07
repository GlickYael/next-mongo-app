"use client"
import React, { useState } from 'react'
import User from '../types/user'
import styles from '../styles/User.module.css'

interface UserContainerProps {
    user: User;
    handleUpdate: (user: User) => void;
    handleDelete: (_id: any) => void;
}

const UserContainer: React.FC<UserContainerProps> = ({ user, handleUpdate, handleDelete }) => {
    const [update, setUpdate] = useState<boolean>(false);
    const [userUpdate, setUserUpdate] = useState(user);
    function handleChange(e: { target: { value: React.SetStateAction<string>; }; }) {
        const newUser = { _id: userUpdate._id, name: ((e.target.value).toString()) }
        setUserUpdate(newUser);
    }
    return (
        <div className={styles.user_container}>
            {!update && 
            <h2 className={styles.user_name} onClick={() => setUpdate(true)}>{user.name}</h2>}
            {update && 
            <div>
                <input value={userUpdate.name} onChange={handleChange} />
                <button onClick={() => handleUpdate(userUpdate)}>update</button>
            </div>
            }
            <button onClick={() => handleDelete(user._id)}>delete</button>
        </div>
    );
}

export default UserContainer;



