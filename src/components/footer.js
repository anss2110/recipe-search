import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

class footer extends Component {
    render() {
        return (
            <div className='footer'>
              <Container>
                <div className='mt-auto' />
                <div className='footer-container'>
                  <p className='footer-text'>RestAPI : edamam <br/> Developer : anss2210 </p>
                  <div className='social-icon-container'>
                    <a href='https://facebook.com/The-Anss-Creations-854161568028162/'>
                      <FontAwesomeIcon className='social-icon' icon={faFacebook} />
                    </a>
                    <a href='https://github.com/anss2110'>
                      <FontAwesomeIcon className='social-icon' icon={faGithub} />
                    </a>
                    <a href='https://www.instagram.com/anss.inc'>
                      <FontAwesomeIcon className='social-icon' icon={faInstagram} />
                    </a>
                  </div>
                </div>
              </Container>
            </div>
        );
    }
}

export default footer;
