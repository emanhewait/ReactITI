import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export class ProductItem extends Component{
    btnTitle="Buy Now !";
    render(){
        const { myProduct } =this.props;
        return(
            <div className="col-sm-6 col-lg-4 p-4">
        <Card>
      <Card.Img variant="top" src={myProduct.Img} />
      <Card.Body>
        <Card.Title>{myProduct?.ProductName}</Card.Title>
        <Card.Text>
          {myProduct?.Price}
        </Card.Text>
        <Card.Text>
        Quantity : {myProduct?.Quantity || 0}
        </Card.Text>
        <Button variant="dark">{this.btnTitle}</Button>
      </Card.Body>
    </Card>
            </div>
        );
    }

}