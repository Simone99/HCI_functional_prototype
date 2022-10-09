import {Col, Row, Form, Button, Card} from 'react-bootstrap';
import { storeMap } from './WelcomePage';
import banana from '../Images/Banana.jpeg'
import pineapple from '../Images/Pineapple.jpeg'
import lemon from '../Images/lemon.png'
import pear from '../Images/pear.png'
import papaya from '../Images/papaya.png'
import mango from '../Images/mango.png'
import strawberry from '../Images/strawberry.png'
import orange from '../Images/orange.jpg'
import cherry from '../Images/cherry.jpeg'
import avocado from '../Images/avocado.jpg'

const products = [
    {
        title: 'Pineapple',
        price: '$1.40',
        store: 'Target',
        src: pineapple
    },
    {
        title: 'Pear',
        price: '$2.80',
        store: 'Target',
        src: pear
    },
    {
        title: 'Banana',
        price: '$0.79',
        store: 'Jewel Osco',
        src: banana
    },
    {
        title: 'Lemon',
        price: '$1.09',
        store: 'Aldi',
        src: lemon
    },
    {
        title: 'Papaya',
        price: '$3.00',
        store: 'Whole Foods',
        src: papaya
    },
    {
        title: 'Mango',
        price: '$3.40',
        store: 'Walmart',
        src: mango
    },
    {
        title: 'Strawberry',
        price: '$3.00',
        store: 'Jewel Osco',
        src: strawberry
    },
    {
        title: 'Orange',
        price: '$2.00',
        store: 'Target',
        src: orange
    },
    {
        title: 'Cherry',
        price: '$1.00',
        store: 'Walmart',
        src: cherry
    },
    {
        title: 'Avocado',
        price: '$2.05',
        store: 'Target',
        src: avocado
    }
];

function SearchResultPage(props){
    return(
        <>
            <Col xs={3}>
                <Row>
                    <h2>Fruits</h2>
                    <p>50 items found</p>
                </Row>
                <Row>
                    <SideBarElementTitle title = {'Availability'}/>
                    <Form.Check type={'checkbox'} id={'availability_option1'} label={'Include out of stock'}/>
                    <Form.Check type={'checkbox'} id={'availability_option2'} label={'Show available items only'}/>
                </Row>
                <Row>
                    <Row>
                        <SideBarElementTitle title = {'Store'}/>
                    </Row>
                    <Row>
                        <span>for <span style={{textDecoration: 'underline'}}>60607</span></span>
                    </Row>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    {Object.keys(storeMap).map(market => <Form.Check type={'checkbox'} id={`store_${market}`} label={market}/>)}
                </Row>
                <Row>
                    <SideBarElementTitle title = {'Price'}/>
                    <Form.Range min={0} max={1000} />
                </Row>
                <Row>
                    <SideBarElementTitle title = {'Discount'}/>
                    {[10, 25, 50, 70].map(percentage => <Form.Check type={'checkbox'} id={`discount_${percentage}`} label={`${percentage}% or more`}/>)}
                    <Form.Check type={'checkbox'} id={'discount_all'} label={'All Deals'}/>
                </Row>
                <Row>
                    <SideBarElementTitle title = {'Keyword'}/>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Row>
            </Col>
            <Col>
                <Row>
                    {products.map(fruit => <CardProduct link = {fruit.src} title = {fruit.title} price = {fruit.price} store = {fruit.store}/>)}
                </Row>
            </Col>
        </>
    );
}

function CardProduct(props){
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" style={{ height: '13rem', objectFit: 'contain' }} src={props.link} />
            <Card.Body>
                <Card.Title>
                    <Row>
                        <Col>
                            {props.title}
                        </Col>
                        <Col style={{textAlign: 'right'}}>
                            {props.price}
                        </Col>
                    </Row>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.store}</Card.Subtitle>
                <div style = {{'textAlign' : 'center'}}>
                    <Button variant="primary">ADD TO CART</Button>
                </div>
            </Card.Body>
        </Card>
    );
}

function SideBarElementTitle(props){
    return(
        <>
            <Col>
                <h2>{props.title}</h2>
            </Col>
            <Col>
                <p style={{color: 'green', textDecoration: 'underline', textAlign: 'right'}}>Clear</p>
            </Col>
        </>
    );
}

export{SearchResultPage, CardProduct}