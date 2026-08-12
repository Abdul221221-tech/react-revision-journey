
// without lifting state up transfering messages from child to parent component using props
import React, { useState } from "react";
import "./lifting.css";

export default function Child(props) {
    return (
        <div className="child">
            <h3 className="child-title">Child Component</h3>
            <p className="child-message">{props.message}</p>
        </div>
    );
}

export function Parent() {
    const [message, setMessage] = useState("Hello from Parent Component");

    return (
        <div className="parent">
            <h2 className="parent-title">Parent Component</h2>

            <button
                className="change-message-btn"
                onClick={() => setMessage("Hello from Child Component")}
            >
                Change Message
            </button>

            <Child message={message} />
        </div>
    );
};
// }

// export  function  LiftingState(){

//         const [inputValue,setInputValue]=useState("")  // state is lifted up to the parent component

//     return(
//         <>
//         <InputComponent inpvalue={inputValue} setInputValue={setInputValue}/ >
//         <DisplayComponent valuetoshow={inputValue} />
//         </>
//     )
// }

// const InputComponent=({inpvalue, setInputValue})=>{  ///get the value and setInputValue function from the parent component as props
//     // const [inputValue,setInputValue]=useState("")

//     return(
//         <input type="text" placeholder="enter you name" value={inpvalue} onChange={(e)=>setInputValue(e.target.value)}></input>

//     )
// }

// const DisplayComponent =({valuetoshow})=>{ //get the value from the parent component as props
//     return(
//         <p> the current input value is: {valuetoshow}</p>
//     )
// }












// Parent Component
export function LiftingState() {

    // State is lifted up to the parent component
    const [inputValue, setInputValue] = useState("");  // baad me --- by lifting

    return (
        <>
            {/* 
                Passing the inputValue and setInputValue function
                from Parent Component to InputComponent as props
            */}
            <InputComponent
                inpvalue={inputValue}
                setInputValue={setInputValue}
            />

            {/*
                Passing the inputValue from Parent Component
                to DisplayComponent as props
            */}
            <DisplayComponent valuetoshow={inputValue} />
        </>
    );
}


// Child Component - Input
const InputComponent = ({ inpvalue, setInputValue }) => {    // props 


        // const [inputValue, setInputValue] = useState("");  lifting se pehle actaul postion ----------


    /*
        Getting the value and setInputValue function
        from the Parent Component as props.
    */

    return (
        <input
            type="text"
            placeholder="Enter your name"

            // Getting the current value from Parent
            value={inpvalue}

            // Updating the Parent's state using the function received as props
            onChange={(e) => setInputValue(e.target.value)}
        />
    );
};


// Child Component - Display
const DisplayComponent = ({ valuetoshow }) => {

    /*
        Getting the value from the Parent Component
        as props and displaying it.
    */

    return (
        <p>
            The current input value is: {valuetoshow}
        </p>
    );
};