import './Style.css'
import {Container} from 'react-bootstrap'
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';

const HomeNavbar=()=> {
  return (
<Router>
    <Navbar expand="lg" className="bg-light  ">
      <Container className='containermain  '>
        <Navbar.Brand  href="#home "className='text-danger' style={{fontSize:"24px",fontWeight:"bold"}}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto navbr h-50 navhoverid" >

            {/* add the links */}
        
            <Link to="/" className='navbr ' >Home</Link>
            <Link  to ="/about " className='navbr'>About</Link>
            <Link  to ="/shop" className='navbr'>Shop</Link>
            <Link  to ="/contact" className='navbr'>Contact</Link>
            <button type="button" className=" position-relative   btn1 bg-0">
            <i class="fa-solid fa-cart-shopping  text-danger pt-2"></i>

  <span className="position-absolute  start-100 translate-middle badge rounded-pill bg-danger carttop ">
    0
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            {/* add path */}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
            <Route exact path='/' Component={Home}></Route>
            <Route exact path='/about' Component={About}></Route>
            <Route exact path='/shop'Component={Shop}></Route>
            <Route exact path='/contact'Component={Contact}></Route>
            </Routes>
    </Router>
  );
}

export default HomeNavbar;