import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard'
import { Col, Container, Row, ButtonGroup, Button } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {

    const [prodList, setProdList] = useState([]);

    const [qeury, setQeury] = useSearchParams()

    const getProductList = async() =>{

        const searchText = qeury.get('q') || ''
        
        // let url = `http://localhost:3004/products?q=${searchText}`;
        let url = `https://my-json-server.typicode.com/jungwonjoo/hnmweb/products?q=${searchText}`;
        let res = await fetch(url);
        let data = await res.json();
        setProdList(data)
    }

    useEffect(()=>{
        getProductList()
    },[qeury])
  return (
    <div style={{padding:'1rem'}}>
        <Container>
            <Row>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="link">Left</Button>
                    <Button variant="link">Middle</Button>
                    <Button variant="link">Right</Button>
                </ButtonGroup>
                {prodList.map((item, index)=>(
                    <Col key={index} xs={6} md={4} style={{marginBottom:20}}>
                        <ProductCard item={item}/>
                    </Col>
                ))}
            </Row>
        </Container>
      
    </div>
  )
}

export default ProductAll
