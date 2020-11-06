import { Col } from "react-bootstrap";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const times = {
  D1: 24 * 60 * 60,
  H4: 4 * 60 * 60,
  H1: 60 * 60,
  M15: 15 * 60,
  M5: 5 * 60,
  M1: 60,
};

const dt = new Date();
const now = dt.getSeconds() + 60 * dt.getMinutes() + 60 * 60 * dt.getHours();

const renderTimer = (name, duration) => (
  <Col className="d-flex justify-content-center" sm={12} md={6} lg={4}>
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      initialRemainingTime={duration - (now % duration)}
      onComplete={() => {
        return [true, 0];
      }}
      strokeLinecap={"square"}
      trailColor={"#656969"}
      size={300}
      strokeWidth={20}
      colors={[
        ["#2a9100", 0.33],
        ["#FFE135", 0.33],
        ["#D82E3F", 0.33],
      ]}
    >
      {({ remainingTime }) => renderCountdown(remainingTime, name)}
    </CountdownCircleTimer>
  </Col>
);

const renderCountdown = (remainingTime, name) => {
  return (
    <div className="text-center">
      <h1 className="display-4 font-weight-bold">{name}</h1>
      <h1 className="font-weight-bold">
        {remainingTime.toHHMMSS()}
        {/* {new Date(remainingTime * 1000).toISOString().substr(11, 8)} */}
      </h1>
    </div>
  );
};

// eslint-disable-next-line no-extend-native
Number.prototype.toHHMMSS = function () {
  var hours = Math.floor(this / 3600);
  var minutes = Math.floor((this - hours * 3600) / 60);
  var seconds = this - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
};

const App = () => (
  <div className="mx-4 h-100 d-flex align-content-around flex-wrap">
    {Object.keys(times).map((key) => renderTimer(key, times[key]))}
  </div>
);

export default App;
