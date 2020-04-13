import React, { Component } from 'react';
import { Row, Card, Accordion, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export class MovieCard extends Component {
  render() {
    const { list } = this.props;
    console.log("props card masuk : " + JSON.stringify(list))

    const healthLabel = list.recipe.healthLabels;
    const listOfHealthLabel = healthLabel.map((healthLabel) => 
      <li>{healthLabel}</li>
    );

    const ingredients = list.recipe.ingredientLines;
    const listOfIngredients = ingredients.map((ingredients) => 
      <li>{ingredients}</li>
    )

    return (
      <>
        <Card className='shadow ml-2 mr-2 mb-4 card-modified'>
          <Card.Body>
            <Row className='card-content-placeholder'>
              <Card.Img variant='top' src={list.recipe.image} className='card-img-placeholder' />
              <div className='card-text-placeholder'>
                <h3 className='card-text top-title'>{list.recipe.label}</h3>
              </div>
            </Row>
            <div className='button show-details' href=''>
              <Accordion className='accordion container'>
                <Card>
                  <Accordion.Toggle variant="link" eventKey="0" className='accordion button'>
                    <Card.Header className='flex-1'>
                      <p className='mb-0'>Health Labels</p>
                      <FontAwesomeIcon className='dropdown-card' icon={faAngleDown} />
                    </Card.Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body className='accordion body'>
                      <ul>
                        {listOfHealthLabel}
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <div className='mb-3' />
                <Card>
                  <Accordion.Toggle variant="link" eventKey="1" className='accordion button'>
                    <Card.Header className='flex-1'>
                      <p className='mb-0'>Ingredients</p>
                      <FontAwesomeIcon className='dropdown-card' icon={faAngleDown} />
                    </Card.Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body className='accordion body'>
                      <ol>
                        {listOfIngredients}
                      </ol>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <div className='mb-3' />
                <Card>
                  <Accordion.Toggle variant="link" eventKey="2" className='accordion button'>
                    <Card.Header className='flex-1'>
                      <p className='mb-0'>Nutrition</p>
                      <FontAwesomeIcon className='dropdown-card' icon={faAngleDown} />
                    </Card.Header>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body className='accordion body'>
                      <div class='flex'>
                        <div className='center horizontal'>
                          <h5>Calories</h5>
                          <h3>{parseInt(list.recipe.totalNutrients.ENERC_KCAL.quantity)} kcal</h3>
                        </div>
                        <div className='center horizontal'>
                          <h5>Fat</h5>
                          <h3>{parseInt(list.recipe.totalNutrients.FAT.quantity)} g</h3>
                        </div>
                      </div>
                      <center>
                        <p style={{fontSize: 14}}>*Notes: per one serving</p>
                      </center>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <div className='mb-3' />
                <div>
                  <Button className='button instruction' href={list.recipe.url}>Instructions</Button>
                </div>
              </Accordion>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default MovieCard;
