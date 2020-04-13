import React, { Component } from 'react';
import Header from './header'
import Content from './content'
import { Container } from 'react-bootstrap';

class pages extends Component {
  render() {
    return (
      <div className='page-scroll'>
        <Container>
          <Header />
          <Content />
        </Container>
      </div>
    );
  }
}

export default pages;