
    const Counter = (props) =>{
        return(
            <div>
    <p>counter: {props.counterP}</p>
    <button onClick = {props.clickIncHandler}>Push to add by 1 </button>
    <button onClick = {props.clickDecHandler}>Push to decrease by 1 </button><br />
    <button onClick = {props.clickHandler}>Push to return to 0 </button>
    <button onClick = {props.clickHandlerMultiplyByTwo}>Push to multiply by 2</button>
    </div>
    );
      }

export default Counter;