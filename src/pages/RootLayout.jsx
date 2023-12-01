//import components
import Header from "../components/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col xs={{ span: 8, offset: 2 }}>
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
};
