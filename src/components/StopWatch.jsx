import React from "react";
import { useState, useEffect } from "react";
import Button from "./Button";
import Timer from "./Timer";

function StopWatch() {
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(true);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    let timePeriod = null;
    if (active && !pause) {
      timePeriod = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 10);
      }, 10);
    } else {
      clearInterval(timePeriod);
    }

    return () => {
      clearInterval(timePeriod);
    };
  }, [active, pause]);

  const initWatch = () => {
    setActive(true);
    setPause(false);
  };

  const initResume = () => {
    setPause(!pause);
  };

  const initReset = () => {
    setActive(false);
    setDuration(0);
  };

  return (
    <div className="stop-watch">
      <Timer time={duration} />
      <Button
        initWatch={initWatch}
        initResume={initResume}
        initReset={initReset}
        active={active}
        pause={pause}
      />
    </div>
  );
}

export default StopWatch;
