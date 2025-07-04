import { useState } from "react";
import styles from "../quizAppTwo/quizAppTwo.module.css";

const QuizAppTwo = () => {
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
        "Creative Style Syntax",
      ],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which HTML tag is used to display a picture?",
      options: ["<img>", "<pic>", "<image>", "<photo>"],
      answer: "<img>",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleNextQuestion = () => {
    if (!selectedOption) return;

    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className={styles.quizContainer}>
      <h2>📖 Simple Quiz App</h2>

      {showScore ? (
        <div className={styles.score}>
          <h3>
            Your Score: {score} / {questions.length}
          </h3>
        </div>
      ) : (
        <div className={styles.quizCard}>
          <h4>
            Question {currentQuestion + 1} of {questions.length}
          </h4>
          <p>{questions[currentQuestion].question}</p>

          {questions[currentQuestion].options.map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="radio"
                name="option"
                value={option}
                checked={selectedOption === option}
                onChange={(e) => setSelectedOption(e.target.value)}
              />
              {option}
            </label>
          ))}

          <button onClick={handleNextQuestion} className={styles.nextButton}>
            {currentQuestion + 1 === questions.length
              ? "Finish"
              : "Next Question"}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizAppTwo;
