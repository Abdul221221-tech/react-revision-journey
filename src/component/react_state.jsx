// import { useState } from "react";
// import "./counter.css";

// export function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div className="counter-container">
//       <h1 className="counter-title">React Counter</h1>

//       <h2 className="counter-value">{count}</h2>  // Display the current count  

//       <button
//         className="counter-btn"
//         onClick={() => setCount(count + 1)} ////    jaise  jaie hm click kreenge   count padte hoga aur upar count ki value show hogi upadte everytime

//       >
//         Increase
//       </button>
//       <button onClick={() => setCount(count - 1)} className="counter-btn">
//         Decrease
//       </button>
//       <button className="counter-btn" onClick={() => setCount(0)}>
//         Reset
//       </button>
//     </div>
//   );
// }


// export function NameCounter(){
//     const[name,setName]=useState("Abdul")
//     const[count,setCount]=useState(0)
//     const[count1,setCount1]=useState(100)
//     return(
//     <div>
// <h1 className="counter-title">My name is {name}</h1>
// <button className="counter-btn" onClick={()=>setName("Abdul Waheed")}>Change Name</button>

// <h1 className="counter-title2"> {count}</h1>
// <button className="counter-btn2" onClick={()=>setCount(count-1)}>Decrease Count</button>

// <h1 className="counter-title3"> {count1}</h1>
// <button className="counter-btn3" onClick={()=>setCount1(0)}>Reset count</button>
//     </div>
//     )
// }









import { useState } from "react";
import "./counter.css";

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">

      <h1 className="counter-title">🚀 React Counter</h1>

      <h2 className="counter-value">{count}</h2>

      <div className="btn-group">
        <button
          className="increase-btn"
          onClick={() => setCount(count + 1)}
        >
          ➕ Increase
        </button>

        <button
          className="decrease-btn"
          onClick={() => setCount(count - 1)}
        >
          ➖ Decrease
        </button>

        <button
          className="reset-btn"
          onClick={() => setCount(0)}
        >
          🔄 Reset
        </button>
      </div>

    </div>
  );
}

export function NameCounter() {

  const [name, setName] = useState("Abdul");
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(100);

  return (

    <div className="profile-container">

      <h1 className="profile-title">
        👤 My Name is
      </h1>

      <h2 className="name">{name}</h2>

      <button
        className="change-btn"
        onClick={() => setName("Abdul Waheed")}
      >
        Change Name
      </button>

      <div className="counter-box">

        <h2 className="counter-title2">
          {count}
        </h2>

        <button
          className="decrease-btn"
          onClick={() => setCount(count - 1)}
        >
          Decrease Count
        </button>

      </div>


      <div className="counter-box">

        <h2 className="counter-title3">
          {count1}
        </h2>

        <button
          className="reset-btn"
          onClick={() => setCount1(0)}
        >
          Reset Count
        </button>

      </div>

    </div>
  );
}


// learning  concept of react state rendering concept
export function StateRendering() {
  const [count12, setCount12] = useState(0);

  return (
    <div className="state-rendering-container">
      <h1 className="state-rendering-title">State Rendering Example</h1>
      <p className="state-rendering-value">Count: {count12}</p>
      <button
        className="state-rendering-btn"
        onClick={() => setCount12(count12 + 1)}


      >
        Increase
      </button>
      <Child1 />
      <Child2 />
      
    </div>

  );
}

function Child1() {
  console.log("StateRendering1 rendered");
  return <h1>StateRendering1 Component</h1>;
}

function Child2() {
  console.log("StateRendering2 rendered");
  return <h1>StateRendering2 Component</h1>;
}



 export function SiblingComp() {
  console.log("StateRendering3 rendered");
  return <h1>StateRendering3 Component</h1>;
}