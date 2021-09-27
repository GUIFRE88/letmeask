import { useState } from "react";
export function Button(){
    const [counter, setCounter] = useState(0);


    function incremet(){
        setCounter(counter + 1)
    }

    return (
        <button onClick={incremet}>
            {counter}
        </button>
    )
}