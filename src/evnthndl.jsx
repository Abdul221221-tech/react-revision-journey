
import "./event.css";

export function Evnthand() {
  function handleButton(event) {
    alert("Button Clicked");
    console.log(event);
    console.log(event.target);
    console.log(event.type);
  }

  return (
    <button className="event-btn" onClick={handleButton}>
      Click Me
    </button>
  );
}


//           // <button onClick={handleButton()}>Click Me</button>

//   // Agar hum function ko () ke saath call kar dete hain,
//   // to component render hote hi function turant execute ho jata hai. Har render par function dubara call hota hai.Agar function state update kare, to re-render hoga aur function fir se call hoga, jisse infinite re-render loop ho sakta hai.

//   // Agar hume function ko arguments ke saath call karna ho to arrow function use karte hain: <button onClick={() => handleButton()}>Click Me</button>

// }

export function Eventhandle2() {
  return (
    <button
      className="event-btn"
      onClick={() => {
        alert("Hello Alert Click");
      }}
    >
      Alert Button
    </button>
  );
}

function handleUser(name) {
  console.log(`Hello ${name}`);
}

export function Eventhandle3() {
  return (
    <button
      className="event-btn"
      onClick={() => handleUser("Going")}
    >
      Greet User
    </button>
  );
}