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
    <div className="text-center ">
      <h1 className="display-4 font-weight-bold">{name}</h1>
      <h1 className="timer font-weight-bold">{time}</h1>
    </div>
  );
};

function App() {
  const d1 = 24 * 60 * 60;
  const h4 = 4 * 60 * 60;
  const h1 = 60 * 60;
  const m15 = 15 * 60;
  const m5 = 5 * 60;
  const m1 = 60;

  const dt = new Date();
  const now = dt.getSeconds() + 60 * dt.getMinutes() + 60 * 60 * dt.getHours();

  return (
    <div className="mx-4 h-100 d-flex align-content-around flex-wrap">
      {renderTimer("D1", d1 - now)}
      {renderTimer("H4", h4 - (now % h4))}
      {renderTimer("H1", h1 - (now % h1))}
      {renderTimer("M15", m15 - (now % m15))}
      {renderTimer("M5", m5 - (now % m5))}
      {renderTimer("M1", m1 - (now % m1))}
    </div>
  );
}

export default App;
