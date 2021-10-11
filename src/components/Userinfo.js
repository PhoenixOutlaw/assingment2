import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { selectdata_get } from "../features/UserSlice";
import "./css/info.css";

export const Userinfo = () => {
  const { id } = useParams();
  const selected = useSelector(selectdata_get);
  

  return (
    <div className="feedcontainer">
      <div className="feed" >
        <div id="tp">
          <Avatar id="iava" />
          <h3> USER - {id}</h3>
          <p>user info for user id {id} </p>
        </div>

        <div className="userlist">
        {selected?.data.map((data)=>
                (data.userId==id)&&
                   (  
                <div className="info" key={data.id}>
                  <h4># {data.title}</h4>
                  <p>
                    {data.body}
                  </p>
                </div>
                 
                 )
                )}
        </div>
      </div>
    </div>
  );
};
