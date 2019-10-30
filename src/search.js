import React from 'react';

/**
 * General component description in JSDoc format. Markdown is *supported*.
 */
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {id:"", img:"", title:"", alt:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({id: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //put in valid thing
    fetch('https://xkcd.now.sh/?comic=' + this.state.id, {
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
      this.setState({img: parsed.img, title: parsed.alt, alt:parsed.title})
    })
    console.log(this.state)
  }


  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
              <input className="searchInput" type="number" value={this.state.value} onChange={this.handleChange} />
            <input className="searchSubmit" type="submit" value="Submit" />
      </form>
      <img className="searchImage" src={this.state.img} title={this.state.title} alt={this.state.alt} />
      </div>
    );
  }
}

export default Search;
