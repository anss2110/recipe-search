import React, { Component} from 'react';
import 'react-bootstrap';
import { Navbar, Container } from 'react-bootstrap';
import Logo from '../assets/logo.png'

class navbar extends Component {
    render() {
        return (
          <Navbar collapseOnSelect expand="lg" variant="light" bg='light'>
            <Container>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src={Logo}
                  width="200"
                  className="d-inline-block align-top"
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              </Navbar.Collapse>
            </Container>
          </Navbar>
        );
    }
}

navbar.propTypes = {

};

export default navbar;