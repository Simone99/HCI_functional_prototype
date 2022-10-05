import React from 'react';
import {Carousel, Row, Card, Col, Button} from 'react-bootstrap';
import carousel1 from '../Images/Carousel1.png'
import carousel2 from '../Images/Carousel2.png'
import carousel3 from '../Images/Carousel3.png'
import Healthy from '../Images/Healthy.jpg'
import Fruits from '../Images/Fruits.jpg'
import Vegetables from '../Images/Vegetables.jpg'
import Dairy from '../Images/Dairy.jpg'
import MeatPultry from '../Images/MeatPoultry.jpg'
import Bakery from '../Images/Bakery.jpg'
import banana from '../Images/Banana.jpeg'
import zucchini from '../Images/Zucchini.jpg'
import chickenbreast from '../Images/ChickenBreast.jpeg'
import pineapple from '../Images/Pineapple.jpeg'
import salad from '../Images/Salad.jpg'
import tomatoes from '../Images/Tomatoes.jpg'
import aldi from '../Images/aldi.png'
import instacart from '../Images/instacart.png'
import jewel from '../Images/jewel.png'
import pete from '../Images/pete.jpg'
import target from '../Images/target.jpg'
import walmart from '../Images/walmart.png'

const categoryMap = {
    'Healthy' : Healthy,
    'Fruits' : Fruits,
    'Vegetables' : Vegetables,
    'Dairy' : Dairy,
    'Meat&Pultry' : MeatPultry,
    'Bakery' : Bakery
};

const pastOrders = [
    {
        title: "Pete's Market",
        date: '09/29/22',
        nItems: '12 items',
        total: '$33.87',
        image: zucchini
    },
    {
        title: "InstaCart",
        date: '09/28/22',
        nItems: '7 items',
        total: '$27.02',
        image: banana
    },
    {
        title: "Target",
        date: '09/20/22',
        nItems: '23 items',
        total: '$58.87',
        image: pineapple
    },
    {
        title: "Jewel Osco",
        date: '09/19/22',
        nItems: '9 items',
        total: '$13.29',
        image: chickenbreast
    },
    {
        title: "Aldi",
        date: '09/05/22',
        nItems: '18 items',
        total: '$67.44',
        image: salad
    },
    {
        title: "Pete's Market",
        date: '09/02/22',
        nItems: '24 items',
        total: '$104.89',
        image: tomatoes
    },
];

const storeMap = {
    'Aldi': aldi,
    "Pete's Market": pete,
    'Target': target,
    'Jewel Osco': jewel,
    'Walmart': walmart,
    'InstaCart': instacart
};

function WelcomePage(props){
    return(
        <>
            <Carousel variant="dark" indicators={false}>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={carousel1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={carousel2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100"
                        src={carousel3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Row>
                <h1>Shop by category</h1>
                <Carousel variant="dark" indicators={false}>
                    <Carousel.Item>
                        <Row>
                            {Object.entries(categoryMap).map(keyValue => <CardCategoryStore link = {keyValue[1]} title = {keyValue[0]} cover = {true}/>)}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <h1>Shop by Past Orders</h1>
                <Carousel variant="dark" indicators={false}>
                    <Carousel.Item>
                        <Row>
                            {pastOrders.map(order => <CardPastOrders title = {order['title']} date = {order['date']} nItems = {order['nItems']} total = {order['total']} link = {order['image']}/>)}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
            <Row>
                <h1>Shop by Store</h1>
                <Carousel variant="dark" indicators={false}>
                    <Carousel.Item>
                        <Row>
                        {Object.entries(storeMap).map(keyValue => <CardCategoryStore link = {keyValue[1]} title = {keyValue[0]} cover = {false}/>)}
                        </Row>
                    </Carousel.Item>
                </Carousel>
            </Row>
        </>
    );
}

function CardCategoryStore(props){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ height: '15rem', objectFit: props.cover? 'cover':'contain' }} src={props.link} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

function CardPastOrders(props){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ height: '13rem', objectFit: 'contain' }} src={props.link} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.date}</Card.Subtitle>
                <Card.Text>
                    <Row>
                        <Col>
                        {props.nItems}
                        </Col>
                        <Col>
                        {props.total}
                        </Col>
                    </Row>
                </Card.Text>
                <div style = {{'textAlign' : 'center'}}>
                    <Button variant="primary">VIEW ORDER</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export{WelcomePage, storeMap};