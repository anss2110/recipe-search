import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class searchbar extends Component {
    render() {
        return (
          <Form.Group>
            <div className='form-inline'>
              <button href='/' className='back-button search'>
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <Form.Control type="search" placeholder="Search..." className='search-bar-1' />
              <button className='search-button-1'>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </Form.Group>
        );
    }
}

export default searchbar;