import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
class header extends Component {
  render() {
    return (
      <div className='page-container'>
        <Card className='shadow ml-2 mr-2 mb-4 detail-card'>
          <Card.Body>
            <h1 className='detail title-placeholder'>Judul</h1>
            <div className='mb-4' />
            <Card.Img variant='top' src='' className='detail img-placeholder' />
            <div className='detail horizontal-rules' />
            <div className='detail recipe-placeholder'>
              <h3>Ingredients</h3>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default header;