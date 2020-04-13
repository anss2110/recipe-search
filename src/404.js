import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

class notFound extends Component {
  render() {
    return (
        <div className='page'>
          <div className='page-scroll'>
            <div className='error-page-container'>
                <center>
                    <FontAwesomeIcon icon={faTimes} size='9x' />
                    <h1>Opss.. Error</h1>
                    <a href='/'><p>Back to home :)</p></a>
                </center>
            </div>
          </div>
        </div>
    );
  }
}

export default notFound;