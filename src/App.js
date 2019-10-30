import React, { Component } from 'react';
import { Link } from 'react-router-dom'
class App extends React.Component {
  constructor(props){
    super(props);
  }


render() {
  return (
    <div>
      <h1>Hello</h1>
      <Link className="latest" to="/">Latest</Link>
      <Link className="search" to="/search">Search</Link>
    </div>
  );
}
}



export default App;
