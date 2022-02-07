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
            <Row xs={2} md={5} className="g-4">
            {Array.from({ length: 50 }).map((_, idx) => (
                <Col>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            ))}
            </Row>
        </>     
        
    )
}