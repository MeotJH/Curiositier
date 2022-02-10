import { Card, Row, Col} from 'react-bootstrap';
import { useEffect, useRef,createRef, useState } from "react";

export default function Main(props){

    

    const [border, setBorder] = useState([])

    function logit() {
        props.setScrollY(window.pageYOffset);
    }

    const card = useRef(null);

    

    useEffect(() => {
        function watchScroll() {

          window.addEventListener("scroll", logit);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", logit);
        };
    });

    function popCard(event) {
        setBorder("primary")
        //card.current.style.border = "1px solid blue" //('border','primary');
        //card.current.className="card border-secondary"
        //console.info(card);
        //console.info("evemt",event);
        //card border-secondary
        //event.target.className="card border-secondary"
    };

    function unPopCard(event) {
        //event.target.className="card"
        //console.info('hello world!');
    };

    return(
        <>
            <Row xs={2} md={5} className="g-4">
            {Array.from({ length: 50 }).map((_, idx) => (
                <Col>
                <Card ref={card} border={border} key={idx} onMouseEnter={popCard} onMouseLeave={unPopCard}>
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