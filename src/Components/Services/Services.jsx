import "./Services.css";
import React from "react";
import Contact from '../Contact/Contact';

function template() {
  return (
    <div className="services">
      <h1>Services</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>title</th>
            <th>url</th>
            <th>thumbnailUrl</th>
          </tr>
          </thead>
          <tbody>
            {
              this.state.users.map((e)=>{
                return <tr>

                  <td>{e.title}</td>
                  <td>{e.url}</td>
                  <td>{e.thumbnailUrl}</td>
            

                </tr>
              
              })
            }
          </tbody>
      </table>
    </div>
  );
};

export default template;
