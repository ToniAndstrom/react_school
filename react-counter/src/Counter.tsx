import { useState } from "react";
const Counter = () => {

  const [counter, setCounter]= useState (0);
  
    const handleAttack = () =>{
      //alert ("Attack clicked"); 
      setCounter(counter +1);
    };
    const handleDefence = () =>{
      //alert ("Defence clicked");
      setCounter(counter -1);
    };
    return(
    <div className="text-white">
      <h1>Counter:{counter}</h1>
      <button onClick = {handleAttack} style={{width: "200px"}}>+1</button>
      < button onClick = {handleDefence} style={{width: "200px"}}>-1</button>
    </div>
  );
}

export default Counter;