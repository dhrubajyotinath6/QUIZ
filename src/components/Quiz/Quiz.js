import React, { useState, useEffect } from "react";
import { getQuestions } from "../../utils/utils";
import Card from "../Cards/Card";
import { Link } from "react-router-dom";
function Quiz() {
  const [qnum, setQnum] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await getQuestions();
      const data = await res.json();
      setQuestions(data.questions);
      setResponses(new Array(data.questions.length));
    }
    getData();
  }, []);

  const getResponse = (res) => {
    setResponses((responses) => {
      var copy = [...responses];
      copy[qnum] = res;
      return copy;
    });
  };

  const nextQues = () => {
    if (qnum < questions.length - 1) {
      setQnum(qnum + 1);
    }
  };
  const prevQues = () => {
    if (qnum > 0) {
      setQnum(qnum - 1);
    }
  };

  return (
    <div className="quiz_div">
      <Card
        nextQues={nextQues}
        prevQues={prevQues}
        question={questions[qnum]}
        getResponse={getResponse}
        response={responses[qnum] || null}
        qnumber = {qnum} // changed
        qlength = {questions.length} //changed
      />
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
  );
}

export default Quiz;
