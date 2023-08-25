import React from "react";
function Buttons(prop) {
  const invokeTimer = (
    <div className="d-grid gap-2 mt-3">
      <div className="btn btn-danger" onClick={prop.initWatch}>
        Start
      </div>
    </div>
  );
  const activeTimer = (
    <div className="d-grid gap-2 mt-3">
      <div className="btn btn-danger" onClick={prop.initReset}>
        Reset
      </div>
      <div className="btn btn-success" onClick={prop.initResume}>
        {prop.paused ? "Resume" : "Pause"}
      </div>
    </div>
  );
  return (
    <div>
      <div>{prop.active ? activeTimer : invokeTimer}</div>
    </div>
  );
}
export default Buttons;
