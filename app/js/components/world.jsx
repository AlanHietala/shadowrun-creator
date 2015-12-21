import React from 'react';
 
class World extends React.Component {
  render() {
    return <h1>World</h1>
  }
}
 
React.render(<World/>, document.getElementById('world'));
