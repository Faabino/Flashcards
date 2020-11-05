import React from "react";

export const RadioFlashcard = (): JSX.Element => {
  const [value, setValue] = React.useState("");
  const [rightAnswer, setRightAnswer] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const answer = "toto";

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
            <p>Whose head is equal to 0 + 0?</p>
            <form onSubmit={handleSubmit}>
              <div className="form-check d-flex" onChange={checkInput}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="firstAnswer"
                  id="firstAnswer"
                  value="toto"
                  checked={value === "toto"}
                />
                <label className="form-check-label" htmlFor="firstAnswer">
                  toto
                </label>
              </div>
              <div className="form-check d-flex" onChange={checkInput}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="secondAnswer"
                  id="secondAnswer"
                  value="tata"
                  checked={value === "tata"}
                />
                <label className="form-check-label" htmlFor="secondAnswer">
                  tata
                </label>
              </div>
              <div className="form-check d-flex" onChange={checkInput}>
                <input
                  className="form-check-input"
                  type="radio"
                  name="thirdAnswer"
                  id="thirdAnswer"
                  value="titi"
                  checked={value === "titi"}
                />
                <label className="form-check-label" htmlFor="thirdAnswer">
                  titi
                </label>
              </div>
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
          That is not the correct answer! :(
          <p>Try again!</p>
        </div>
      </div>
    );
  }
};
