import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Modal,
    ModalHeader,
    ModalBody
  } from 'reactstrap';
import AboutText from './AboutText';

class Menu extends Component {

//   toggleAbout(e) {
//     e.preventDefault();
//     this.setState((prevState, props) => {
//         return {
//             showAbout: !prevState.showAbout
//         }
//     });
//   }

  render() {
    return (
      <div>
          <Navbar color="faded" light expand="md">
            <NavbarBrand href="/">xkcd Prime Viewer</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#" onClick={(e) => { this.props.toggleAbout(e)} }>About</NavLink>
                </NavItem>
            </Nav>
          </Navbar>
      </div>
    );
  }
}

export default Menu;