import "./Contact.css";
import React from "react";

function template() {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
            {
              this.state.contact.map((e)=>{
              return <tr>
                     <td>{e.id}</td>
                     <td>{e.name}</td>
                     <td>{e.email}</td>
                     </tr>
              })
              }
          
        </tbody>
      </table>
    </div>
  );
};

export default template;
