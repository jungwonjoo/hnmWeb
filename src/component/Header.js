import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header({authenticate}) {

    const topMenu = ["메뉴1","메뉴2","메뉴3","메뉴4"]
    const navigate = useNavigate();

    const [searchText, setSearchText] = useState('')

    const handleSearch = (e) => {
        e.preventDefault() 
        navigate(`?q=${searchText}`)
    }

    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
            <Navbar.Brand href="#">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                {topMenu.map((menu, index)=>(
                    <Nav.Link key={index} href="#action1">{menu}</Nav.Link>
                ))}
            </Nav>
            <Form className="d-flex" onSubmit={handleSearch}>
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"   
                    onChange={(e)=>setSearchText(e.target.value)}                 
                />               
                <Button variant="outline-success" type='submit'>Search</Button> 
            </Form>
            <Nav>
                <Nav.Link href="#action2">{authenticate === true ? "로그아웃" : "로그인"}</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
  );
}

export default Header;