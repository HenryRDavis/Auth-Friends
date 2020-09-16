import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import MoreFriends from './MoreFriends';

const FriendsList = () => {
    const [friends, setFriends] = useState([])
    
    useEffect(() => {

    }, [friends])

    axiosWithAuth() 
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
        })
        .catch(err => console.log(err))

    return (
        <div>
            {friends.map((data) => (
                
                <div id={data.id}>
                    <h1>{data.name}</h1>
                    <h3>{data.age}</h3>
                    <h3>{data.email}</h3>
                </div>
            ))}
            <MoreFriends />
        </div>
    );
}

export default FriendsList;