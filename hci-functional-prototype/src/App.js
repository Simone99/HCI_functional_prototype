import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import { CategoryBar } from './Components/CategoryBar';
import { TopBar } from './Components/TopBar';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import { WelcomePage } from './Components/WelcomePage';
import { SearchResultPage } from './Components/SearchResultsPage';
import { useEffect, useState } from 'react';
import banana from './Images/Banana.jpeg'
import pineapple from './Images/Pineapple.jpeg'
import lemon from './Images/lemon.png'
import pear from './Images/pear.png'
import papaya from './Images/papaya.png'
import mango from './Images/mango.png'
import strawberry from './Images/strawberry.png'
import orange from './Images/orange.jpg'
import cherry from './Images/cherry.jpeg'
import avocado from './Images/avocado.jpg'
//import { scrapeWebSite } from './API';


const products = [
  {
      title: 'Pineapple',
      category: ['Fruits', 'Healthy'],
      price: 1.40,
      store: 'Target',
      src: pineapple
  },
  {
      title: 'Pear',
      category: ['Fruits', 'Healthy'],
      price: 2.80,
      store: 'Target',
      src: pear
  },
  {
      title: 'Banana',
      category: ['Fruits', 'Healthy'],
      price: 0.79,
      store: 'Jewel Osco',
      src: banana
  },
  {
      title: 'Lemon',
      category: ['Fruits', 'Healthy'],
      price: 1.09,
      store: 'Aldi',
      src: lemon
  },
  {
      title: 'Papaya',
      category: ['Fruits', 'Healthy'],
      price: 3.00,
      store: 'Whole Foods',
      src: papaya
  },
  {
      title: 'Mango',
      category: ['Fruits', 'Healthy'],
      price: 3.40,
      store: 'Walmart',
      src: mango
  },
  {
      title: 'Strawberry',
      category: ['Fruits', 'Healthy'],
      price: 3.00,
      store: 'Jewel Osco',
      src: strawberry
  },
  {
      title: 'Orange',
      category: ['Fruits', 'Healthy'],
      price: 2.00,
      store: 'Target',
      src: orange
  },
  {
      title: 'Cherry',
      category: ['Fruits', 'Healthy'],
      price: 1.00,
      store: 'Walmart',
      src: cherry
  },
  {
      title: 'Avocado',
      category: ['Fruits', 'Healthy'],
      price: 2.05,
      store: 'Target',
      src: avocado
  }
];

function App() {

  //const [products, setProducts] = useState([]);

  useEffect(() => {
    products.forEach(product => {
        product.keyword = [product.title, product.store, ...(product.category)];
        product.keyword = product.keyword.map(str => str.toLowerCase());
      });
  }, []);

  /*const scrape = async (keyword, store) => {
    console.log("Start scraping!")
    const data = await scrapeWebSite(`https://www.walmart.com/search?q=${keyword}`, store);
    setProducts(data.map(item =>  {
      const tmp_obj = {
        src: item.image,
        title: item.name,
        category: ['Fruits', 'Healthy'],
        price: item.price,
        store: store
      };
      return tmp_obj;
    }));
  };*/

  return (
    <Container fluid>
      <Router>
        <Routes>
          <Route path="/HCI_functional_prototype/" element = {<Layout/>}>
            <Route index element={<WelcomePage/>}/>
            <Route path="/HCI_functional_prototype/products" element={<SearchResultPage/>}/>
            <Route path="*" element={<><h1>No content here!</h1><h2>Don't modify the URL please...</h2></>}/>
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

function Layout(){
  return (
    <>
      <Row>
        <TopBar/>
      </Row>
      <Row>
        <CategoryBar/>
      </Row>
      <Row>
        <Outlet/>
      </Row>
    </>
  );
}

export default App;
export{products};
