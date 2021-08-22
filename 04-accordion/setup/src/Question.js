import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ questions }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="question">
      {questions.map((question) => {
        const { id, title, info } = question;
        return (
          <div>
            <h2>{title}</h2>
            <p>{readMore ? info : `${info.substring(0, 100)}`}</p>
            <button
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              Toggle expand
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Question;
