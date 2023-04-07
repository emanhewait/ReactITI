import { Component } from "react";
import { Nav } from "react-bootstrap"
import"./MySlider.css"

export class MyNav extends Component{
    render()
    {
      return (
          <div>
               
     <Nav className="navbar-light bg-light">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >Products</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link >About</Nav.Link>
      </Nav.Item>
    </Nav>
          </div>
      
      
  );

    }
  
}