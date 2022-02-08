import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Container, Row, Col, Stack} from 'react-bootstrap';
import './App.css';
import Header from './layouts/Header'
import Main from './layouts/Main2'


function App() {

  const [scrollY, setScrollY] = useState(0);

  return (
    <div className="App">
      <Container fluid>
      <Stack gap={5}>
        <Row>
          <Header scrollY={scrollY}/>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={10} ><Main scrollY={scrollY} setScrollY={ setScrollY }/></Col>
          <Col></Col>
        </Row>
        <Row>
        </Row>
      </Stack>
      </Container>
    </div>
  );
}

export default App;
