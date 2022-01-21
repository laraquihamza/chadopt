import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component {
state = {
    data: null
  };

  componentDidMount()  {
    this.callBackendAPI()
//      .then(res => this.setState({ data: res.express }))
//      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    var headers=new Headers({"Content-Type":"application/json"})
    const response = await fetch('http://localhost:5000/signup?id=jejjj&password=jdjd',{method:"POST"}).
    then(res=>res.text())
    .then(text=>console.log(text));
  };

  render() {
    return (
      <Fragment>
        <Header/>
        <Body/>
      </Fragment>
    );
  }
}

export default App;