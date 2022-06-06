// jshint esversion:6
import React, {useState} from "react";
import {Navbar, Nav} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import {baseUrl} from '../Constants';

function Header(props){
  const [randomEntry, setRandomEntry] = useState(Math.floor(Number(props.latest)*Math.random())+1);
  return <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
    <LinkContainer to={baseUrl}>
      <Nav.Link active="false">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to={`${baseUrl}/${props.latest}`}>
      <Nav.Link>Latest</Nav.Link>
      </LinkContainer>
      <LinkContainer to={`${baseUrl}/55`}>
      <Nav.Link>Tesla</Nav.Link>
      </LinkContainer>
      <LinkContainer to={`${baseUrl}/${randomEntry}`} onClick={()=> setRandomEntry(Math.floor(90*Math.random())+1)}>
       <Nav.Link >Random</Nav.Link>
       </LinkContainer>
      </Nav>
  </Navbar>
}

export default Header
