import { Outlet, Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';
import * as images from '../assests/image'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useCustomSelector } from '../Service/allSelector/customSelector';
const Header = () => {
    const navigate = useNavigate();
    const {cart} = useCustomSelector();
    // const [cartItem, setCartItem] = useState([selectCartItems]);
    const user = JSON.parse(localStorage.getItem('userData'));
    const login = localStorage.getItem('isChecked');
    const logOut = () => {
        localStorage.removeItem('isChecked')
        // localStorage.removeItem('userData')
        // Cookies.remove('studentData')
        navigate('/')
    }
    const loginPage = ()=>{
        navigate('/login')
    }
    const homePage = ()=>{
        navigate('/home')
    }
    const blogPage = ()=>{
        navigate('/blog')
    }
    const contactPage = ()=>{
        navigate('/contact')
    }
    const cartPage = ()=>{
        navigate('/cart')
    }
    

  

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: 'gray' }}>
                <Container>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link onClick={homePage} style={{ color: 'black', fontWeight: 'bold' }}>Home</Nav.Link>
                            <Nav.Link onClick={blogPage} style={{ color: 'black', fontWeight: 'bold' }}>Blog</Nav.Link>
                            <Nav.Link onClick={contactPage} style={{ color: 'black', fontWeight: 'bold' }}>Contact</Nav.Link>
                            {login ?
                                <NavDropdown title="My Profile" id="basic-nav-dropdown" style={{ color: 'black', fontWeight: 'bold' }}>
                                    <NavDropdown.Item to="/logOut" onClick={logOut} >
                                        <li>{`email:${user?.email}`}</li>
                                        LogOut</NavDropdown.Item>
                                </NavDropdown>
                                :
                                <Nav.Link onClick={loginPage} style={{ color: 'black' }}>Login</Nav.Link>

                            }
                            <Nav.Link onClick={cartPage} >
                            <div className='row' style={{height:'10px'}}>
                           <span >
                                <img src={images.icon} style={{height:'40%' ,margin: '-5px 1px' , paddingLeft:'54rem'}} />  
                           <span>{`${cart?.data?.length}`}</span>
                           </span>
                            </div>
                            </Nav.Link>
                            
                                      
                        </Nav>
                    </Navbar.Collapse>
                
                </Container>
            </Navbar>

        </>
    )
}
export default Header;