import React from "react";
import Question from "./question";

const QuestionList = () => {
  return (
    <div className="flex flex-col w-full h-full gap-y-4">
      {[1, 2, 3, 4, 5, 6, 7].map((el) => (
        <Question key={el} />
      ))}
    </div>
  );
};

export default QuestionList;
