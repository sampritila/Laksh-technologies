import "./Home.css";
import React from "react";

function template() {
  return (
    <div className="home">
      <h1>Home</h1>
      <h3>jQuery Resquest</h3>
      <input type="button" value="Get Details" onClick={this.getDetails}/>
         {
          this.state.posts.map((e)=>{
          return <div> 
                       <div>{e.id}</div>
                       <div>{e.title}</div>
                       <div>{e.completed}</div>
                       <hr/>
                         
                  </div>


          })
        }
        
    </div>
  );
};

export default template;
