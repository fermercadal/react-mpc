import React, { Component } from 'react';

class Pad extends Component {
  render() {
    return (
      <button id={ 'drum-pad-' + this.props.padKey } className="drum-pad" onClick={this.props.playKey}>
        <span>{ this.props.padKey }</span>
        <audio id={ this.props.padKey } className='clip' src={ this.props.padSound }></audio>
      </button>
      
    );
  }
}

export default Pad;