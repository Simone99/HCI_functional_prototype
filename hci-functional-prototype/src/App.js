import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row} from 'react-bootstrap';
import { CategoryBar } from './Components/CategoryBar';
import { TopBar } from './Components/TopBar';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import { WelcomePage } from './Components/WelcomePage';
import { SearchResultPage } from './Components/SearchResultPage';
import { Product } from './Components/Product';
import data from './productData.json';

function App() {
  const [items, setItems] = useState(data)

  return (
    <Container fluid>
      <Router>
        <Routes>
          <Route path="/" element = {<Layout/>}>
            <Route index element={<WelcomePage/>}/>
            <Route path="/products" element={<SearchResultPage/>}/>
            <Route path="/productDes" element={<Product items = {items} setItems = {setItems}/>}/>
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
