import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../src/assets/logo_engefenix.jpg';

const Img = styled.img`
  width: 100%;
` 
const Anchor = styled.a`
  color: #585858;
  text-decoration: none;
`

const Column = styled(Col)`
  display: flex;
  justify-content: center;
  font-family: 'Noto Sans', sans-serif;
`

function App() {
  return <Container fluid gap={2} className="p-5">
            <Row>
              <Col>
                <Img src={logo} />
              </Col>
            </Row>
            <Row className="my-5">
              <Column>
                <Anchor href="mailto:contato@engefenix.com.br">contato@engefenix.com.br</Anchor>
              </Column>
            </Row>
          </Container>;
}

export default App;
