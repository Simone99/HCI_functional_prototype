import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Container, Row, Col} from 'react-bootstrap';
import { CategoryBar } from './Components/CategoryBar';
import { TopBar } from './Components/TopBar';
import {BrowserRouter as Router, Routes, Route, Outlet} from 'react-router-dom'
import { WelcomePage } from './Components/WelcomePage';

function App() {
  return (
    <Container fluid>
      <Router>
        <Routes>
          <Route path="/" element = {<Layout/>}>
            <Route index element={<WelcomePage/>}/>
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
      <Outlet/>
    </>
  );
}

export default App;
