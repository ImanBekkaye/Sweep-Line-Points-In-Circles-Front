import './App.css';
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import PointsInCirclesVisualization from "./Components/PointsInCirclesVisualization";
import AppRoutes from "./Components/AppRoutes";
import {Link} from "react-router-dom";


function App() {

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                        <Navbar.Brand href="#home">PMF project 2023</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/points-in-circles-testing'> Points-In-Circles algorithm </Nav.Link>
                        <Nav.Link as={Link} to='/documentation'>Documentation</Nav.Link>
                        <Nav.Link as={Link} target="_blank" to='https://github.com/ImanBekkaye/Sweep-Line-Points-In-Circles.git' > GitHub - algorithm </Nav.Link>
                        <Nav.Link as={Link} target="_blank" to='https://github.com/ImanBekkaye/Sweep-Line-Points-In-Circles-Front.git'> GitHub - visualization </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <AppRoutes />
        </div>
    );
}

export default App;
