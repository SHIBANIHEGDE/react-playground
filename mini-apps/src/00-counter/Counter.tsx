import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = ()=>{
        setCounter(prev=> prev+1)
    }
     const decrementCounter = ()=>{
        setCounter(prev=> prev-1)
    }
    return (

        <>
        <button onClick={incrementCounter}>+</button>
        <span> {counter}</span> 
        <button onClick={decrementCounter}>-</button></>

    )
}
export default Counter;