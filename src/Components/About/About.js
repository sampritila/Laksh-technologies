import React    from "react";
import template from "./About.jsx";
import axios from 'axios';

class About extends React.Component {

  constructor(){
    super();
    this.state={
      'photos':[]
    }
  }

  UNSAFE_componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
      
      this.setState({
        'photos':res.data
      })
        
      


    })
    .catch((res)=>{
      this.setState({
        'photos':[]
      })


    })
  }
  
  render() {
    return template.call(this);
  }
}

export default About;
