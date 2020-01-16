import React    from "react";
import template from "./Contact.jsx";

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      'contact': []
    }
  }

  UNSAFE_componentWillMount() {

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        this.setState({
          'contact': data
        })

      })
  }
  render() {
    return template.call(this);
  }
}

export default Contact;
