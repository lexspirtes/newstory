import React from 'react';
import './styles.css'

/**
 * App Component
 * holds links to Latest and Search
 */
class App extends React.Component {
render() {
  return (
    <div>
      <h1>XKCD COMICS</h1>
      <a className="latest" href="/">Latest</a>
      <a className="search" href="/search">Search</a>
    </div>
  );
}
}



export default App;
