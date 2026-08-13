 import React, { useState } from "react";
 import "./toggle.css";
export  function Toggle() {
    const [isOn, setIsOn] = useState(false);

    const HandleToggle = () => {
        setIsOn(!isOn);
    };  // ye kya krega ki agr value true hogi t fakse kr dega fakse huwi to tue aur uske hisab se on off control hoga value change hote hi
    return(
        <div className="toggle"    style={{background: isOn ? 'green' : 'gray'}}  onClick={HandleToggle}> 

        <div className={`toggle-switch ${isOn ? 'on' : 'off'}`}> 
             {/* // toggle_switch is by default class hoga aur agr isOn true hoga to on class add hoga otherwise off class add hoga */}
            <span className="toggle-slider">{isOn ? 'ON' : 'OFF'}</span>  
            {/* // condition agr true hoga to ON show hoga otherwise OFF show hoga */}
        </div>
            
        </div>
    )
}