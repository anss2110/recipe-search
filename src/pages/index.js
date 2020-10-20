import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import ImgJumbotron from '../assets/joi-souma-3.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';

import { searchRecipe } from '../actions/getData';

class landingPages extends Component {
    onChange = e => {
      this.props.searchRecipe(e.target.value);
    };
    render() {
        return (
          <div className='page'>
            <div className='stillJumbotron'>
			        <img className='stillJumbotron image' src={ImgJumbotron} alt='food' />
			        <div className='stillJumbotron content'>
			        	<div className='stillJumbotron content-container'>
                  <div className='search-card'>
                    <h3 className='title'>Find your recipe what you want!</h3>
                    <div className='mb-4' />
                      {/* <div className='search-box'> */}
                        <Form.Group>
                          <form action='/search' id='searchRecipes' method="GET">
                            <div className='form-inline'>
                              <input
                                type="text"
                                className="search-box"
                                name="text"
                                placeholder="Search..."
                                onChange={this.onChange}
                              />
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
          </div>
        );
    }
}

const mapStateToProps = state => ({
  text: state.recipe.text
});

export default connect(
  mapStateToProps,
  { searchRecipe }
)(landingPages);
