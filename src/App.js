import React from 'react'
import  { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
const tasbih = require('./img/tasbeh.png')

export default function App() {
  const [count, setCount] = useState(0);

    if(count > 100){
      setCount(0)
    }

  return (
<>
    <Container>
      <Row>
        <Col xs={4}>  

      <img className='img' src={tasbih} alt=''/>;

        
        <div>
           <p className='pi'> {count}</p>
              <button className='buton' onClick={() => setCount(count + 1)}>
                 Count
              </button>
  
        </div>
        </Col>
      </Row>
    </Container>
</>
    )
}