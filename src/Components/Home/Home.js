import React    from "react";
import template from "./Home.jsx";
import $ from 'jquery';


class Home extends React.Component {
  constructor(){
    super();
    this.state={
      'posts':[]
    }
    this.getDetails=this.getDetails.bind(this);
  }

  getDetails=()=>{
    $.get('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>{
     this.setState({
       'posts':res
     })

    },(res)=>{
      this.setState({
        'posts':[]
      })


    });

  }
  render() {
    return template.call(this);
  }
}

export default Home;
