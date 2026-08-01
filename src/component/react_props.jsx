import { Mybutton } from "./event_props";
export  function EventProps() {
    const mousehover=()=>{
        alert("mouse over event")

    }
    
    const clickmouse=()=>{
        alert("click event")
    }
    return(
        <>

                   <Mybutton
                   text="Click Me"
                clickp={clickmouse}
                mousep={mousehover}
            />

        
        </>
    )
}