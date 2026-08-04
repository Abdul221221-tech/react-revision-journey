export  function Mybutton(props){
    return(
        <>
<button onClick={props.clickp}>Click Me</button>
<button onClick={props.clickp}>{props.text}</button>

<button onMouseOver={props.mousep}>Hover me</button>

<button onMouseOver={props.mousep}>{props.text}</button>




        
        </>

    )
}