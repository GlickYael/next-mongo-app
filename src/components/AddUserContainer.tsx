"use client"
import React from 'react'
import styles from '../styles/User.module.css'

type AddUserContainerProps = {
    setAddUserContainer: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const AddUserContainer: React.FC<AddUserContainerProps>=({setAddUserContainer , handleAddSubmit})=> {
    return (
        <div className={styles.add_user_container}>
                <button type="button" onClick={()=>setAddUserContainer(false) }>x</button>
                <form onSubmit={handleAddSubmit}>
                    <input name='name' type="text" placeholder="Enter user name" />
                    <button type="submit">Add</button>
                </form>
        </div>
    )
}

export default AddUserContainer
