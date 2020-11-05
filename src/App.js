import { Col } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const renderTimer = (name, duration) => (
  <Col className="d-flex justify-content-center" sm={12} md={6} lg={4}>
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      onComplete={() => {
        return [true, 0];
      }}
      size={300}
      strokeWidth={20}
      colors={[
        ["#004777", 0.33],
        ["#F7B801", 0.33],
        ["#A30000", 0.33],
      ]}
    >
      {({ remainingTime }) => renderTime(remainingTime, name)}
    </CountdownCircleTimer>
  </Col>
);

const renderTime = (remainingTime, name) => {
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  let time = "";

  if (remainingTime > 3600) {
    time = `${hours}:${minutes}:${seconds}`;
  } else if (remainingTime > 60) {
    time = `${minutes}:${seconds}`;
  } else {
    time = `${seconds}`;
  }

  return (
    <div>
      <h1 className="text-center display-3">
        <b>{name}</b>
      </h1>
      <h1 className="timer display-4">{time}</h1>
    </div>
  );
};

function App() {
  return (
    <div className="mx-4 h-100 d-flex align-content-around flex-wrap">
      {renderTimer("D1", 24 * 60 * 60)}
      {renderTimer("H4", 4 * 60 * 60)}
      {renderTimer("H1", 60 * 60)}

      {renderTimer("M15", 60 * 15)}
      {renderTimer("M5", 60 * 5)}
      {renderTimer("M1", 60)}
    </div>
  );
}

export default App;
