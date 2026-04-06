import React, { useState } from "react";

const SumCalculator = () => {

    let [sum, setSum] = useState(0)// 0 1 = 1 

    function handleInput(e){
        let value = e.target.value
        setSum(+sum + +value)
    }

    return (
        <div>
            <h1>Sum Calculator</h1>
             <input onChange={handleInput} type="number"/>
             <p>Sum : {sum}</p>
        </div>
    )
}

export default SumCalculator
