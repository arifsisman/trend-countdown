import { Row, Col, Container } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const renderTimer = (name, duration) => (
  <Col xs={4} sm={4} md={4} lg={4} className="d-flex justify-content-center">
    <h1>{name}</h1>
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      onComplete={() => {
        return [true, 0];
      }}
      size={250}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {renderTime}
    </CountdownCircleTimer>
  </Col>
);

const renderTime = ({ remainingTime }) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="timer">
      <h2>{`${hours}:${minutes}:${seconds}`}</h2>
    </div>
  );
};

function App() {
  return (
    <Container className="h-100">
      <Row className="d-flex align-items-center my-auto">
        {renderTimer("D1", 120)}
        {renderTimer("H4", 120)}
        {renderTimer("H1", 120)}
      </Row>

      <Row className="d-flex align-items-center my-auto">
        {renderTimer("M15", 120)}
        {renderTimer("M5", 120)}
        {renderTimer("M1", 120)}
      </Row>
    </Container>
  );
}

export default App;
