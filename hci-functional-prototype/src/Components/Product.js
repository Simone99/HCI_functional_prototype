import React from 'react';
import {Carousel, Row, Card, Col, Button} from 'react-bootstrap';
import {CardProduct} from './SearchResultPage'
import Badge from 'react-bootstrap/Badge';
import banana from '../Images/Banana.jpeg';

function Product({ items }){
  return(
      <>
      <Row>
        <Row>
          <Button variant="link">Back to Search</Button>
            <Col xs={2}>
              <Card.Img variant="top" style={{ height: '13rem', objectFit: 'contain' }} src= {banana}/>
            </Col>
            <Col>
              <Badge bg="primary">{items[2].tags[0]}</Badge>{' '}
              <Badge bg="primary">{items[2].tags[1]}</Badge>{' '}
              <h2>{items[2].title}</h2>
              <p>{items[2].store}</p>
              <p>{items[2].price} / count</p>
              <Button variant="primary">ADD TO CART</Button>
            </Col>
        </Row>
        <Row>
        <h1>Similar Items</h1>
          <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                  <Row>
                      {items.map(order => <CardProduct title = {order['title']} date = {order['date']} nItems = {order['nItems']} total = {order['total']} link = {order['image']}/>)}
                  </Row>
              </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
        <h1>Other Users Buy...</h1>
          <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                  <Row>
                      {items.map(order => <CardProduct title = {order['title']} date = {order['date']} nItems = {order['nItems']} total = {order['total']} link = {order['image']}/>)}
                  </Row>
              </Carousel.Item>
          </Carousel>
        </Row>
      </Row>
      </>
  );
}


export{Product};
