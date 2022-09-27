import React, { useState } from "react";
import ANSWERS from "./answers";

const EightBall = () => {
    const [color, setColor] = useState("black");
    const [message, setMessage] = useState("Think of a Question");
    return(
        <div className="app-container">
            <div className={`eightball ${color}`}>
                <div className="ball-text">{ message }</div>
            </div>
        </div>
    )
}

export default EightBall;