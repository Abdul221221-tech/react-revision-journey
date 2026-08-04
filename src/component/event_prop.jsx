import './event_prop.css';

export function EventPropagation1() {
  const Grandparent = () => {
    console.log("Grandparent");
  };
  const Parent = () => {
    console.log("Parent");
  };
  const Child = () => {
    console.log("Child");
  };

  return (
    <div className="event-section">
      <h2>🫧 Event Bubbling (default)</h2>
      <div className="gp-box" onClick={Grandparent}>
        Grandparent — click anywhere here
        <div className="parent-box" onClick={Parent}>
          Parent — click anywhere here
          <button className="child-btn" onClick={Child}>
            Click Me (Child)
          </button>
        </div>
      </div>
    </div>
  );
}

export function EventPropagation2() {
  const Grandparent1 = () => {
    console.log("Grandparent");
  };
  const Parent1 = () => {
    console.log("Parent");
  };
  const Child1 = () => {
    console.log("Child");
  };

  return (
    <div className="event-section">
      <h2>🎯 Event Capturing</h2>
      <div className="gp-box" onClickCapture={Grandparent1}>
        Grandparent — click anywhere here
        <div className="parent-box" onClickCapture={Parent1}>
          Parent — click anywhere here
          <button className="child-btn" onClickCapture={Child1}>
            Click Me (Child)
          </button>
        </div>
      </div>
    </div>
  );
}

export function EventPropagation3() {
  const Grandparent2 = (event) => {
    console.log("Grandparent");
    event.stopPropagation();
  };

  const Parent2 = (event) => {
    console.log("Parent");
    event.stopPropagation();
  };

  const Child2 = (event) => {
    console.log("Child");
    event.stopPropagation();
  };

  return (
    <div className="event-section">
      <h2>🛑 Stop Propagation</h2>
      <div className="gp-box" onClick={Grandparent2}>
        Grandparent — click anywhere here
        <div className="parent-box" onClick={Parent2}>
          Parent — click anywhere here
          <button className="child-btn" onClick={Child2}>
            Click Me (Child)
          </button>
        </div>
      </div>
    </div>
  );
}