import { useState } from "react";
import styles from "../quizApp/quizApp.module.css"; 

const QuizApp = () => {
  const questions = [
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
    },
    {
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Creative Style Sheets",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "What year was JavaScript created?",
      options: ["1996", "1995", "1994", "1997"],
      answer: "1995",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption("");
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <h1>Quiz App</h1>

      {showResult ? (
        <div className={styles.result}>
          <h2>Quiz Completed!</h2>
          <p>
            Your Score: {score} / {questions.length}
          </p>
        </div>
      ) : (
        <div>
          <h3 className={styles.question}>
            {currentIndex + 1}. {questions[currentIndex].question}
          </h3>

          <div>
            {questions[currentIndex].options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className={`option-button ${
                  selectedOption === option
                    ? option === questions[currentIndex].answer
                      ? "correct"
                      : "incorrect"
                    : ""
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <button
            onClick={handleNextQuestion}
            disabled={!selectedOption}
            className="next-button"
          >
            {currentIndex + 1 === questions.length ? "Finish" : "Next"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
