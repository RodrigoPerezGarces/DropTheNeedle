import React from 'react'


const ProfilePage = props => {
    
    return props.loggedInUser && <h1> Hi, {props.loggedInUser.username} </h1>
}

export default ProfilePage