export  function Mybutton(props){
    return(
        <>
<button onClick={props.mousep}>Click Me</button>
<button  onClick={props.mousep}>{props.text}</button>

<button onMouseOver={props.clickp}>Hover me</button>

<button onMouseOver={props.clickp}>{props.text}</button>




        
        </>

    )
}