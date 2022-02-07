import 'bootstrap/dist/css/bootstrap.css';
import { useState } from "react";
import { Container, Row, Col} from 'react-bootstrap';
import './App.css';
import Header from './layouts/Header'
import Main from './layouts/Main2'


function App() {

  const [scrollY, setScrollY] = useState(0);

  return (
    <div className="App">
      <Container>
        <Header scrollY={scrollY}/>
        <Main scrollY={scrollY} setScrollY={ setScrollY }/>
      </Container>
    </div>
  );
}

export default App;
