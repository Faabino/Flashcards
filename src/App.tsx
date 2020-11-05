import React from "react";
import logo from "./logo.svg";
import "./styles/App.css";
import "./styles/Flashcards.css";
import { SimpleFlashcard } from "./components/SimpleFlashcard";
import { InputFlashcard } from "./components/InputFlashcard";
import { RadioFlashcard } from "./components/RadioFlashcard";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Flashcard Quizz</p>
      </header>
      <SimpleFlashcard />
      <InputFlashcard />
      <RadioFlashcard />
    </div>
  );
};

export default App;
