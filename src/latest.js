import React, { Component } from 'react';


class Latest extends React.Component {
  constructor(props){
    super(props);
    this.state = {img: "", title:"", alt:""};
  }

  componentDidMount(){
    fetch('https://xkcd.now.sh/?comic=latest', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      let parsed = JSON.parse(data)
      this.setState({latestImage: parsed.img, title:parsed.alt, alt: parsed.title})
    })
}

  render() {
    return (
      <div>
        <img className="latestImage" src={this.state.latestImage} title={this.state.title} alt={this.state.alt} />
      </div>
    );
  }
}

export default Latest;
