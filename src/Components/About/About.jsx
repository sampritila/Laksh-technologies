import "./About.css";
import React from "react";

function template() {
  return (
    <div className="about">
      <h1>Avatars</h1>
      {this.state.photos.map((e)=>{
        return <div className="photos">
      <div>{e.alnumId}</div>
      <div>{e.title}</div>
      <div>{e.url}</div>
      <img width="150px" height="150px" src={e.thumbnailUrl}/>


        </div>


      })
    }
      
    </div>
  );
};

export default template;
