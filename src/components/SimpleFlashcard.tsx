import React from "react";
import data from "../data/data.json";

type SimpleFlashcardProps = {
  question?: string;
  answer?: string;
};

export const SimpleFlashcard: React.FC<SimpleFlashcardProps> = ({
  question,
  answer,
}) => {
  const [showAnswer, setShowAnswer] = React.useState(false);

  return (
    <>
      {showAnswer ? (
        <div className="card">
          <div
            id="simpleCard"
            className="bg-light text-dark card-body clickable-card"
            onClick={() => setShowAnswer(false)}
          >
            <p>Réponse :</p>
            <p>{data.answer}</p>
          </div>
        </div>
      ) : (
        <div className="card">
          <div
            id="simpleCard"
            className="bg-dark card-body clickable-card"
            onClick={() => setShowAnswer(true)}
          >
            <p>Question :</p>
            <p>{data.question}</p>
          </div>
        </div>
      )}
    </>
  );
};
