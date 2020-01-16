import React    from "react";
import template from "./Services.jsx";

class Services extends React.Component {

  constructor(){
    super();
    this.state={
      'users':[]
    }
  }

  UNSAFE_componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response=>response.json())
    .then(res=>{
      this.setState({
        'users':res
      })
    })

  }
  render() {
    return template.call(this);
  }
}

export default Services;
