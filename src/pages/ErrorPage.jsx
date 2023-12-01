//import hooks
import { useNavigate, useRouteError } from "react-router-dom";

//import components
import { Container, Row, Col, Button } from "react-bootstrap";

export default function ErrorPage() {
  let error = useRouteError();
  let navigate = useNavigate();
  return (
    <div>
      <Container>
        <Row>
          <Col xs={{ span: 8, offset: 2 }}>
            <div className="mt-5 text-center">
              <h1>Oops!</h1>
              <p>Sorry,un expected error occurred</p>
              <p>
                <i>{error.statusText || error.message}</i>
              </p>
              <Button
                variant="Link"
                onClick={() => {
                  navigate("/", { replace: true });
                }}></Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
