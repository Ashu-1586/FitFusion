import React from "react"; 
import { Navbar, Nav, NavDropdown } from "react-bootstrap"; 
import { Link, useLocation } from "react-router-dom"; 
import Auth from "../utils/auth"; 
import heart from "../assets/images/heart.png";  

export default function Header() {   
  const loggedIn = Auth.loggedIn();   
  const location = useLocation();   
  const isHomePage = location.pathname === "/";   
  const isLoginPage = location.pathname === "/login";   
  const isSignupPage = location.pathname === "/signup";   
  const isNutritionPage = location.pathname === "/nutrition"; // Check if we are on the Nutrition page    

  return (     
    <Navbar collapseOnSelect expand="sm" variant="dark" bg={loggedIn && !isHomePage ? "dark" : null}>       
      {loggedIn ? (         
        <>           
          <Navbar.Brand as={Link} to="/" className="brand brand-logged d-flex align-items-center">             
            <img alt="heart" style={{ display: "inline" }} src={heart} className="heart-icon" />             
            FitFusion           
          </Navbar.Brand>           
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />           
          <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">             
            <Nav>               
              <Nav.Link as={Link} to="/exercise" eventKey="1">                 
                Exercise               
              </Nav.Link>               
              <Nav.Link as={Link} to="/history" eventKey="2">                 
                History               
              </Nav.Link>               
              <Nav.Link as={Link} to="/workout-plans" eventKey="3">                 
                Workout Plans               
              </Nav.Link>               
              {/* New Dropdown for Calculators */}               
              <NavDropdown title="Calculators" id="calculators-dropdown">                 
                <NavDropdown.Item as={Link} to="/bmi-calculator">                   
                  BMI Calculator                 
                </NavDropdown.Item>                 
                <NavDropdown.Item as={Link} to="/calorie-calculator">                   
                  Calorie Calculator                 
                </NavDropdown.Item>                 
                <NavDropdown.Item as={Link} to="/macros-calculator">                   
                  Macros Calculator                 
                </NavDropdown.Item>               
              </NavDropdown>               
              <Nav.Link as={Link} to="/nutrition" eventKey="4" className={isNutritionPage ? "active" : ""}>                 
                Nutrition               
              </Nav.Link>               
              <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>             
            </Nav>           
          </Navbar.Collapse>         
        </>       
      ) : (         
        <Navbar.Brand           
          as={Link}           
          to="/"           
          className={`brand brand-new mx-auto d-flex align-items-center ${isLoginPage || isSignupPage ? "brand-text" : null}`}         
        >           
          <img alt="heart" style={{ display: "inline" }} src={heart} className="heart-icon" />           
          FitFusion         
        </Navbar.Brand>       
      )}     
    </Navbar>   
  ); 
}
