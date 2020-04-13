import React, { Component } from 'react';
import '../common.scss';
import 'react-bootstrap';
// import Navigation from '../components/navbar';
import DetailPage from '../components/detail/pages';
// import Footer from '../components/footer';

class detail extends Component {
  render() {
    return (
      <div className='page'>
        {/* <Navigation /> */}
        <DetailPage />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default detail;