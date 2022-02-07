import { Navbar, Container, Nav } from 'react-bootstrap';
import { useEffect, useRef } from "react";

export default function Header(props){

    const myContainer = useRef(null);
    function setHeaderDynamic(){
        
        const move = 50;

        if (props.scrollY > move ) {

            myContainer.current.classList.add('fixed-top');
            let navbar_height = myContainer.current.offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';

        } else {

            myContainer.current.classList.remove('fixed-top');
            document.body.style.paddingTop = '0';
            
        }
    }

    useEffect(() => {
        function watchScroll() {
          window.addEventListener("scroll", setHeaderDynamic);
        }
        watchScroll();
        return () => {
          window.removeEventListener("scroll", setHeaderDynamic);
        };
    });


    return(
        <Navbar ref={myContainer} bg="white" variant="light">
            <Container>
            <Navbar.Brand href="#home">Curiositier</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
            )
}