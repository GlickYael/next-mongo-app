"use client"
import React, { useState, useEffect } from 'react'
import UserContainer from '@/components/UserContainer';
import User from '@/types/user';
import http from '@/services/http';
import styles from '../../styles/User.module.css'
import AddUserContainer from '../../components/AddUserContainer'

function Users() {
    const [users, setUsers] = useState<User[] | []>([])
    const [addUserContainer, setAddUserContainer] = useState<boolean>(false);

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

    async function handleAddSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const nameInput = form.elements.namedItem('name') as HTMLInputElement | null;
        if (!nameInput) {
            console.error("Name input element not found in form.");
            return;
        }
    
        const name = nameInput.value;
        const response = await http.post('/users', { name:name });
        console.log(response);
        
        const newUser = { name, _id: response.data.res.insertedId };
        setUsers((prevUsers) => [...prevUsers, newUser]);
        setAddUserContainer(false);
    }

    async function handleUpdate(updateUser:User){
        try{
        const upUser= await  http.put(`/users/${updateUser._id}`, updateUser);
        if(!upUser){
            throw new Error(`User update failed`);
        }
        let index = users.findIndex(u => u._id === updateUser._id);
        const newUsers = [...users];
        newUsers[index] = updateUser;
        setUsers(newUsers);
        }catch(err){
            console.log(err);
            
        }
    }

    async function handleDelete(_id:any){
        try{
        const res = await http.delete(`/users/${_id}`, _id);
        if(!res) throw new Error
        const arr=users.filter(u => u._id !==_id);
        setUsers(arr);
        }
        catch(err){
            console.log(err);
        }
    }


return (
    <div className={styles.users_container}>
        {!addUserContainer && <button type="button" onClick={() => setAddUserContainer(true)}>Add+</button>}
        {addUserContainer && <AddUserContainer setAddUserContainer={setAddUserContainer} handleAddSubmit={handleAddSubmit} />}
        {users.map(user => (
            <UserContainer user={user} key={user._id} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        ))}
    </div>
)
}

export default Users;
