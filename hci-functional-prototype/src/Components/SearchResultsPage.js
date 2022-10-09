import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Form, Button, Card} from 'react-bootstrap';
import { storeMap } from './WelcomePage';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MultiRangeSlider from "multi-range-slider-react";
import { products } from '../App';

function SearchResultPage(props){
    const [searchParams, setSearchParams] = useSearchParams();
    const [displayProducts, setDisplayProducts] = useState([]);
    const [storeSelected, setStoreSelected] = useState(searchParams.get('store'));
    const [categorySelected, setCategorySelected] = useState(searchParams.get('category'));
    const location = useLocation();
    const [keyword, setKeyword] = useState(location.state == ""? null: location.state);
    const [minPriceValue, setMinPriceValue] = useState(0);
    const [maxPriceValue, setMaxPriceValue] = useState(50);
    const handleInput = (e) => {
        setMinPriceValue(e.minValue);
        setMaxPriceValue(e.maxValue);
    };

    useEffect(() => {
        setDisplayProducts(/*props.*/products.filter(product => {
            return filterProducts(product, storeSelected, categorySelected, minPriceValue, maxPriceValue, keyword);
        }));
    }, [storeSelected, categorySelected, minPriceValue, maxPriceValue, keyword]);

    useEffect(() => {
        setKeyword(location.state == ""? null: location.state);
    }, [location.state])

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
                    {Object.keys(storeMap).map(market => <Form.Check checked={storeSelected === market} type={'checkbox'} id={`store_${market}`} label={market} onChange = {() => {
                        if(storeSelected !== market){
                            setStoreSelected(market);
                        }
                        else{
                            setStoreSelected(null);
                        }
                    }}/>)}
                </Row>
                <Row>
                    <SideBarElementTitle title = {'Price'}/>
                    <MySlider minValue = {minPriceValue} maxValue = {maxPriceValue} handleInput = {handleInput}/>
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
                    {displayProducts.map(fruit => <CardProduct link = {fruit.src} title = {fruit.title} price = {fruit.price} store = {fruit.store}/>)}
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
                            {`$${props.price}`}
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

function MySlider(props){
    return(
        <div>
            <MultiRangeSlider
                min={0}
                max={50}
                step={0.5}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onInput={(e) => {
                    props.handleInput(e);
                }}
                ruler={false}
                style={{ border: "none", boxShadow: "none", padding: "15px 10px" }}
            />
        </div>
    );
}

function filterProducts(product, store, category, minPrice, maxPrice, keyword){
    if(keyword === null){
        if(category !== null && store !== null){
            if(product.category.some(c => c  === category) && product.store === store && product.price <= maxPrice && product.price >= minPrice){
                return true;
            }
            return false;
        }else{
            if(category !== null && product.category.some(c => c  === category) && product.price <= maxPrice && product.price >= minPrice){
                return true;
            }
            if(store !== null && product.store === store && product.price <= maxPrice && product.price >= minPrice){
                return true;
            }
            if(category === null && store === null && product.price <= maxPrice && product.price >= minPrice){
                return true;
            }    
        }
    }else{
        keyword = keyword.toLowerCase();
        if(category !== null && store !== null){
            if(product.category.some(c => c  === category) && product.store === store && product.price <= maxPrice && product.price >= minPrice && product.keyword.some(key => key === keyword)){
                return true;
            }
            return false;
        }else{
            if(category !== null && product.category.some(c => c  === category) && product.price <= maxPrice && product.price >= minPrice && product.keyword.some(key => key === keyword)){
                return true;
            }
            if(store !== null && product.store === store && product.price <= maxPrice && product.price >= minPrice && product.keyword.some(key => key === keyword)){
                return true;
            }
            if(category === null && store === null && product.price <= maxPrice && product.price >= minPrice && product.keyword.some(key => key === keyword)){
                return true;
            }    
        }
    }
    return false;
}

export{SearchResultPage}