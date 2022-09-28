import React, { useState } from "react";
import ANSWERS from "./answers";

const EightBall = () => {
    const [color, setColor] = useState("black");
    const [message, setMessage] = useState("Think of a Question");

    const numberOfResponses = ANSWERS.length;
    function handleClick() {
        let randomNum = Math.floor(Math.random() * numberOfResponses) + 1;
        let response = ANSWERS[randomNum];
        setColor(response.color);
        setMessage(response.msg);
        console.log("response:", response, "response.color", response.color, "response.msg", response.msg);
    }
    return(
        <>
            <div className="title">MAGIC EIGHTBALL</div>
            <div className="app-container">
                <button className="btn" onClick={handleClick}>
                    <div className={`eightball ${color}`}>
                        <div className="ball-text">{ message }</div>
                    </div>
                </button>
            </div>
        </>
    )
}

export default EightBall;