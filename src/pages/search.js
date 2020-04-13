import React, { Component } from 'react';
import { Row, Container, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Spinner from '../components/spinner';
import FoodCard from '../components/search/cards';

import { connect } from 'react-redux';
import { fetchRecipeList, setLoading } from '../actions/getData';

export class cardcontainer extends Component {
  
  componentDidMount() {
    const params = new URLSearchParams(this.props.location.search);
    console.log('params masuk : ' + params);
    this.props.fetchRecipeList(params.get('text'));
    this.props.setLoading();
  }
  render() {
    const fillSearch = new URLSearchParams(this.props.location.search);
    // console.log('masukkk => ' + JSON.stringify(this.props))
    const { loading, listOfRecipe } = this.props;
    // console.log('golll  => ' + JSON.stringify(list));

    let listHits = '';

    listHits = 
      !loading 
        ? listOfRecipe.map((list, index) => (
            <FoodCard key={index} list={list} />
          ))
      :
      null;

    return (
      <>
        <div className='page-scroll'>
          <Container>
            <div className='mt-3' />
            <Form.Group>
              <div className='form-inline'>
                <FontAwesomeIcon icon={faChevronLeft} onClick={() => window.history.back()} className='back-button search' />
                <h1 className='mb-0'>Shows search of "{fillSearch.get("text")}" </h1>
              </div>
            </Form.Group>
            <div className='mb-4' />
            {loading ? <Spinner /> : <Row>{listHits}</Row> }
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.recipe.loading,
  listOfRecipe: state.recipe.listOfRecipe,
});

export default connect(
  mapStateToProps,
  { fetchRecipeList, setLoading  }
)(cardcontainer);