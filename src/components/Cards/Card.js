import React from "react";
import "./Card.css";
function Card({qlength,qnumber, question, getResponse, response, nextQues, prevQues }) { // changed
  return (
    <div className="quiz_container">
      <div className="quiz_card">
        <p className="question_text">{question?.text}</p>
        <div className="options_div">
          {question?.options.map((option) => {
            return (
              <button
                className={`option${
                  response && option.id === response.id ? " selected" : ""
                }`}
                onClick={() => {
                  getResponse(option);
                }}
              >
                {option.text}
              </button>
            );
          })}
        </div>
      </div>
      <div className="buttons">
        <button  className={`${qnumber === 0 ? "button_disabled" : "button"}`} onClick={() => prevQues()}>Prev</button>  
        <button className={`${qnumber === qlength-1 ? "button_disabled" : "button"}`}onClick={() => nextQues()}>{qnumber === qlength-1 ? "Submit" : "Next"}</button>     
      </div>
    </div>
  );
}

export default Card;
