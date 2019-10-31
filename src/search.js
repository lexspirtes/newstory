import React from 'react';

/**
 * Search component
 * state is id number inputted by user and comic with that ID number
 */
class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {id:"", comic:""};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** handler for input form change */
  handleChange(event) {
    this.setState({id: event.target.value});
  }

  /** handler for submit button */
  handleSubmit(event) {
    event.preventDefault();
    this.fetchContent(this.state.id)
  }

  /** API call and sets state to comic with inputted ID */
  fetchContent(id) {
    fetch('https://xkcd.now.sh/?comic=' + id, {
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
      <form onSubmit={this.handleSubmit}>
            <input className="searchInput"
                   type="number"
                   value={this.state.value}
                   onChange={this.handleChange}
            />
            <input className="searchSubmit" type="submit" value="Submit" />
      </form>
      <img className="searchImage"
           src={this.state.comic.img}
           title={this.state.comic.alt}
           alt={this.state.comic.title}
      />
      </div>
    );
  }
}

export default Search;
