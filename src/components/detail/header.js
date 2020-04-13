import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class header extends Component {
  render() {
    return (
      <Form.Group>
        <div className='form-inline'>
          <button onClick={() => window.history.back()} className='back-button detail'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <h1 className='mb-0'>Detail</h1>
        </div>
      </Form.Group>
    );
  }
}

export default header;