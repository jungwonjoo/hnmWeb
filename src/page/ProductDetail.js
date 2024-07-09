import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const [prodDetail, setProdDetail] = useState('')

    const {id} = useParams()

    const getProdDetail = async() => {
        let url = `https://my-json-server.typicode.com/jungwonjoo/hnmweb/products/${id}`;
        let res = await fetch(url);
        let data = await res.json();
        setProdDetail(data)
        console.log(data);
    }

    useEffect(()=>{
        getProdDetail()
    },[])

  return (
    <div style={{padding:'1rem'}}>
        <Container>
            <Row>
                <Col>
                    <img src={prodDetail.img} alt='img'/>
                </Col>
                <Col>
                    <ul>
                        <li>{prodDetail.choice === true? "good choice" : "" }</li>
                        <li>₩ {prodDetail.price}</li>
                        <li>{prodDetail.new === true? "⭐신상":""} </li>
                        <li>                            
                            {prodDetail.size && 
                                <select>
                                    {prodDetail.size.map((s, i)=>(
                                        <option key={i}>{s}</option>
                                    ))}
                                </select>
                            }
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default ProductDetail
