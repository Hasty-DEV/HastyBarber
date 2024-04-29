import { FaHome } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Button, Col, Container, Row } from "react-bootstrap";
import { BottomNavbarContainer } from "../../styles/BottomNavbar/BottomNavbar.style";

const BottomNavbar = () => {
    return (
        <BottomNavbarContainer className="fixed-bottom border-top">
            <Container fluid>
                <Row className="justify-content-center">
                    <Col xs={4} className="d-flex align-items-center justify-content-center">
                        <Button type="button" variant="transparent" className="d-flex flex-column align-items-center">
                            <FaHome size={32} />
                            <span>Home</span>
                        </Button>
                    </Col>
                    <Col xs={4} className="d-flex align-items-center justify-content-center">
                        <Button type="button" variant="transparent" className="d-flex flex-column align-items-center">
                            <IoChatbubbleEllipsesOutline size={32} />
                            <span>Mensagens</span>
                        </Button>
                    </Col>
                    <Col xs={4} className="d-flex align-items-center justify-content-center">
                        <Button type="button" variant="transparent" className="d-flex flex-column align-items-center">
                            <CgProfile size={32} />
                            <span>Profile</span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </BottomNavbarContainer>
    )
}

export default BottomNavbar