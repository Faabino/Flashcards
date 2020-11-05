import React from "react";
import data from "../data/data.json";

type InputFlashcardProps = {
  question?: string;
  answer?: string;
};

export const InputFlashcard: React.FC<InputFlashcardProps> = (): JSX.Element => {
  const [value, setValue] = React.useState("");
  const [rightAnswer, setRightAnswer] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const answer = data.answer;

  const checkInput = (event: any) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: any) => {
    setRightAnswer(answer === value);
    setSubmitted(true);
    event.preventDefault();
  };

  if (!submitted) {
    return (
      <>
        <div className="card">
          <div className="bg-dark card-body">
            <p>{data.question}</p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                id="answer"
                placeholder="Type your answer here..."
                onChange={checkInput}
              ></input>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    );
  } else if (rightAnswer) {
    return (
      <div className="card" onClick={() => setSubmitted(false)}>
        <div className="bg-success card-body clickable-card">
          Good job! {value} is the correct answer!
        </div>
      </div>
    );
  } else {
    return (
      <div className="card" onClick={() => setSubmitted(false)}>
        <div className="bg-danger card-body clickable-card">
          {value} is not the correct answer! :(
        </div>
      </div>
    );
  }
};
