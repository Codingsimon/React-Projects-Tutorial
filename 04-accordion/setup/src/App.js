import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import Question from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div>
      <Question questions={questions} />
    </div>
  );
}

export default App;
