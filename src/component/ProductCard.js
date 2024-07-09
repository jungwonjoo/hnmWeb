import React from 'react'
import {Card, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({item}) => {

    const navigate = useNavigate();
    const detailPage = () => { navigate(`/product/${item.id}`)}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title> {item.title}</Card.Title>
        <Card.Text>
            {item.choice === true? "good choice" : "" } <br/>
            ₩ {item.price} <br/>
            {item.new === true? "⭐신상":""} <br/>
        </Card.Text>
        <Button variant="primary" onClick={detailPage}>Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ProductCard
