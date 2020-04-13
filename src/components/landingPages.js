import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ImgJumbotron from '../assets/jumbotron.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class landingPages extends Component {
    render() {
        return (
            <div className='stillJumbotron'>
			        <img className='stillJumbotron image' src={ImgJumbotron} />
			        <div className='stillJumbotron content'>
			        	<div className='stillJumbotron content-container'>
                  <div className='search-card'>
                    <h1 className='title'>Find your recipe what you want!</h1>
                    <div className='mb-4' />
                      {/* <div className='search-box'> */}
                        <Form.Group>
                          <form action='/search' id='searchRecipes' method="GET">
                            <div className='form-inline'>
                              <Form.Control type="search" placeholder="Search..." className='search-box' name='keywords' />
                              <button className='search-button'>
                                <FontAwesomeIcon icon={faSearch} />
                              </button>
                            </div>
                          </form>
                        </Form.Group>
                      {/* </div> */}
                  </div>
                </div>
			        </div>
            </div>
        );
    }
}

export default landingPages;