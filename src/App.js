import { useState } from "react";
import "./App.css";
import QuizView from "./components/QuizView";
import ScoreView from "./components/ScoreView";

function App() {
  const questions = [
    {
      question: "Which HTML tag is used to create a hyperlink?",
      answers: [{ text: "<link>" }, { text: "<href>" }, { text: "<a>", isCorrect: true }],
    },
    {
      question: "What is DOM?",
      answers: [
        { text: "Application programming interface" },
        { text: "interacting with objects in html documents", isCorrect: true },
        { text: "Hierarchy of objects in ASP.NET" },
        { text: "None of the mentioned" },
      ],
    },
    {
      question: "What does <td> stand for?",
      answers: [
        { text: "Table database" },
        { text: "Table directory" },
        { text: "Table direct row" },
        { text: "Table data", isCorrect: true },
      ],
    },
    {
      question: "Which HTML tag is used to create an ordered list in a webpage?",
      answers: [
        { text: "<ul>" },
        { text: "<ol>", isCorrect: true },
        { text: "<li>" },
        { text: "<ol> and <ul>" },
      ],
    },
    {
      question: "Which of the following property is used to control the space between the border and content in a table?",
      answers: [
        { text: "padding", isCorrect: true },
        { text: "border" },
        { text: "margin" },
        { text: "resize" },
      ],
    },
    {
      question: "Which of the following CSS Property controls how an element is positioned?",
      answers: [
        { text: "fix" },
        { text: "position", isCorrect: true },
        { text: "set" },
        { text: "static" },
      ],
    },
    {
      question: "When does JavaScript code appear inline within an HTML file?",
      answers: [
        { text: "Between or Outside the “script” tag" },
        { text: "Between the header tag" },
        { text: "Outside the “script” tag" },
        { text: "Between the “script” tag", isCorrect: true },
      ],
    },
    {
      question: "What is the purpose of JavaScript in web development?",
      answers: [
        { text: "To define the structure and content of web pages" },
        { text: "To add interactivity and behavior to web pages", isCorrect: true },
        { text: "To style and format web pages" },
        { text: "To manage server-side data and databases" },
      ],
    },
    {
      question: "What is the JavaScript keyword used to define a function?",
      answers: [
        { text: "function", isCorrect: true },
        { text: "var" },
        { text: "let" },
        { text: "const" },
      ],
    },
    {
      question: "Which CSS property is used to specify the width of an element?",
      answers: [
        { text: "width", isCorrect: true },
        { text: "padding" },
        { text: "margin" },
        { text: "height" },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerClick = (isCorrect) => {
    // check score
    if (isCorrect) setScore(score + 1);

    const next = currentQuestion + 1;
    if (next < questions.length) setCurrentQuestion(next);
    else setIsQuizOver(true);
  };

  const handleResetClick = () => {
    // fix: score not resetting
    setScore(0);

    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  return (
    <div className="App">
      {isQuizOver ? (
       <ScoreView handleResetClick={handleResetClick} score={score}/>
      ) : (
        <QuizView
          questions={questions}
          currentQuestion={currentQuestion}
          handleAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
}

export default App;