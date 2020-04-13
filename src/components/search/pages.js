import React, { Component } from 'react';
import SearchBar from './searchbar';
import CardContainer from './cardcontainer'
import { Container } from 'react-bootstrap';

class pages extends Component {
  render() {
    return (
      <div className='page-scroll'>
        <Container>
          <SearchBar />
          <CardContainer />
        </Container>
      </div>
    );
  }
}

export default pages;