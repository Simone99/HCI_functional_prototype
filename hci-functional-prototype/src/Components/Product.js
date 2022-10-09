import React, { useEffect, useState } from 'react';
import {Carousel, Row, Card, Col, Button} from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import {CardProduct} from './SearchResultPage'
import Badge from 'react-bootstrap/Badge';
import { products } from '../App';
import {goToDescription} from './SearchResultPage'

function Product(){

  const location = useLocation();
  const [displayedProduct, setDisplayedProduct] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    let tmp_obj = null;
    let p;
    for(p of products){
      console.log(p.title);
      if(p.title === location.state){
        console.log("Mmmm!")
        tmp_obj = p;
      }
    }
    setDisplayedProduct(tmp_obj);
  }, [location.state]);

  return(
      <>
      <Row>
        <Row>
          <Button variant="link" onClick={() => navigate("/HCI_functional_prototype")}>Back to Home</Button>
            <Col xs={2}>
              <Card.Img variant="top" style={{ height: '13rem', objectFit: 'contain' }} src= {displayedProduct.src}/>
            </Col>
            <Col>
              <Badge bg="primary">Bestseller</Badge>{' '}
              <Badge bg="primary">Low in Stock</Badge>{' '}
              <h2>{displayedProduct.title}</h2>
              <p>{displayedProduct.store}</p>
              <p>{`$${displayedProduct.price}`} / count</p>
              <Button variant="primary">ADD TO CART</Button>
            </Col>
        </Row>
        <Row>
        <h1>Similar Items</h1>
          <Carousel variant="dark" indicators={false}>
              <Carousel.Item>
                  <Row>
                      {products.map((item, index) => {
                        if(index < 5){
                          return <CardProduct link = {item.src} title = {item.title} price = {item.price} store = {item.store} onclick = {() => goToDescription(item.title, navigate)}/>
                        }
                      })}
                  </Row>
              </Carousel.Item>
              <Carousel.Item>
                  <Row>
                      {products.map((item, index) => {
                        if(index >= 5){
                          return <CardProduct link = {item.src} title = {item.title} price = {item.price} store = {item.store} onclick = {() => goToDescription(item.title, navigate)}/>
                        }
                      })}
                  </Row>
              </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
        <h1>Other Users Buy...</h1>
          <Carousel variant="dark" indicators={false}>
          <Carousel.Item>
                  <Row>
                      {products.map((item, index) => {
                        if(index < 5){
                          return <CardProduct link = {item.src} title = {item.title} price = {item.price} store = {item.store} onclick = {() => goToDescription(item.title, navigate)}/>
                        }
                      })}
                  </Row>
              </Carousel.Item>
              <Carousel.Item>
                  <Row>
                      {products.map((item, index) => {
                        if(index >= 5){
                          return <CardProduct link = {item.src} title = {item.title} price = {item.price} store = {item.store} onclick = {() => goToDescription(item.title, navigate)}/>
                        }
                      })}
                  </Row>
              </Carousel.Item>
          </Carousel>
        </Row>
      </Row>
      </>
  );
}


export{Product};
