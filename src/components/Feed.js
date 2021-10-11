import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { selectdata_get } from '../features/UserSlice'
import './css/feed.css'


export const Feed = () => {
    const data = useSelector(selectdata_get)
    const history = useHistory()
    var   dupli = 0;
    function updatedupli(id) {dupli=id;}
    return (
        <div className="feedcontainer">
            <div className="feed">
            <div id="tp">
                <h3> USERS</h3>
                <p>Select user ID to see the contents</p>
            </div>    
            
            <div className="userlist">
                {data?.data.map((data)=>
                (data.userId!==dupli)&&
                   (  
                   <div className="users" key={data.userId} onClick={()=>history.push(`/userinfo/${data.userId}`)}>
                         {updatedupli(data.userId)}
                     <Avatar id="ava"/>
                     <h4> User ID {data.userId}</h4>
                 </div>)
                )}
           

            </div>

            </div> 
            
        </div>
    )
}
