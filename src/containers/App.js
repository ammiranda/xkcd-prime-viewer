import React, { Component } from 'react';
import Proptypes from 'prop-types';
import { connect } from 'react-redux';
import Menu from '../components/Menu';
import Viewer from '../components/Viewer';
import About from '../components/About';

class App extends Component {
  constructor() {
      super();
      this.state = {
          showAbout: false
      }
  }

  toggleAbout() {
      this.setState((prevState, props) => {
          return {
              showAbout: !prevState.showAbout
          }
      })
  }

  render() {
    return (
      <div className="App">
        <Menu toggleAbout={this.toggleAbout.bind(this)} />
        <About showAbout={this.state.showAbout} toggleAbout={this.toggleAbout.bind(this)} />
        <Viewer />
      </div>
    );
  }
}

export default App;