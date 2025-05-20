import React from "react";

export default function A(){

    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <h1>Ouo</h1>
            <p>{counter}</p>
            <button onClick={()=> setCounter(counter+1)}>Ouo</button>
        </div>
    )
}