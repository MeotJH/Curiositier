import { Card, Button, Row, Col} from 'react-bootstrap';
import { useEffect } from "react";
import defaultImg from "images/default.png"

export default function Main(props){

    function logit() {
        props.setScrollY(window.pageYOffset);
    }

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", logit);
        };
    }); 

    return(
        <>
        <Row className="justify-content-md-center" >
            <Col sm={8}>
                <div className="cardDivide">
                <Card >
                    <Card.Header>title</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Img variant="top" src={defaultImg} />
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
                <hr></hr>
                <div className="cardDivide" >
                <Card >
                    <Card.Header>title</Card.Header>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Img variant="top" src={defaultImg} />
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
            </Col>
        </Row>
        </>     
        
    )
}