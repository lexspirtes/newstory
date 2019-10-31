import React from 'react';


/**
 * Latest component
 * state is latest comic from XKCD API
 */
class Latest extends React.Component {
  constructor(props){
    super(props);
    this.state = {comic: ""};
  }

  /** fetchContent upon mount */
  componentDidMount(){
    this.fetchContent()
}

  /** API call and sets state to latest comic */
  fetchContent() {
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
      this.setState({comic: JSON.parse(data)})
    })
  }

  render() {
    return (
      <div>
        <img className="latestImage"
             src={this.state.comic.img}
             title={this.state.comic.alt}
             alt={this.state.comic.title}
        />
      </div>
    );
  }
}

export default Latest;
