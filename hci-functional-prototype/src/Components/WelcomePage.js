import {Carousel, Row, Card} from 'react-bootstrap';
import carousel1 from '../Images/Carousel1.png'
import carousel2 from '../Images/Carousel2.png'
import carousel3 from '../Images/Carousel3.png'

const categoryList = ['Healthy', 'Fruits', 'Vegetables', 'Dairy', 'Meat & Pultry', 'Bakery'];

function WelcomePage(props){
    return(
        <>
            <Carousel>
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
                <Carousel>
                    {categoryList.map(category => <CarouselCardItem link={'../Images/' + category + '.jpg'} title = {category}/>)}
                </Carousel>
            </Row>
        </>
    );
}

function CarouselCardItem(props){
    return(
        <Carousel.Item interval={5000}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.link} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                </Card.Body>
            </Card>
        </Carousel.Item>
    );
}

export{WelcomePage};