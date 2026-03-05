import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSubjects } from '../context/SubjectsContext';
import { AnswerOption } from './AnswerOption';
import { ProgressBar } from './ProgressBar';

const letters = ['A', 'B', 'C', 'D'];

export const QuizForm = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const { subject, questionNumber } = useParams();
  const navigate = useNavigate();

  const { subjects, incrementScore, score } = useSubjects();

  console.log(score);

  const quiz = subjects.find((quiz) => quiz.title.toLowerCase() === subject);
  const totalQuestions = quiz ? quiz.questions.length : 0;
  const { question, options, answer } = quiz
    ? quiz.questions[questionNumber - 1]
    : null;

  console.log(answer);

  const isLastQuestion = +questionNumber === totalQuestions;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    if (!showFeedback) {
      if (selectedOption === null) return;
      setShowFeedback(true);

      if (options[selectedOption] === answer) {
        incrementScore();
      }
    } else {
      setSelectedOption(null);
      setShowFeedback(false);

      if (isLastQuestion) {
        navigate(`/quiz/${subject}/results`);
        return;
      }

      navigate(`/quiz/${subject}/${+questionNumber + 1}`);
    }
  };

  return (
    <form className="quiz-form" onSubmit={handleSubmit}>
      <div className="quiz-form__container">
        <div className="quiz-form__text-container">
          <p className="quiz-form__question-number">
            Question {questionNumber} of {totalQuestions}
          </p>

          <label className="quiz-form__question-text" htmlFor="question">
            {question}
          </label>
        </div>

        <ProgressBar
          currentQuestion={questionNumber}
          totalQuestions={totalQuestions}
        />
      </div>

      <div className="quiz-form__answers">
        {options.map((option, id) => {
          const isSelected = selectedOption === id;
          const isCorrect = showFeedback && option === answer;
          const isIncorrect = showFeedback && isSelected && option !== answer;

          return (
            <AnswerOption
              key={id}
              id={`answer-${id}`}
              letter={letters[id]}
              answer={option}
              isSelected={isSelected}
              isCorrect={isCorrect}
              isIncorrect={isIncorrect}
              setSelectedOption={() => setSelectedOption(id)}
              showFeedback={showFeedback}
            />
          );
        })}

        <button
          className="quiz-form__button"
          onClick={handleClick}
          type="submit"
        >
          {showFeedback ? 'Next Question' : 'Submit Answer'}
        </button>
      </div>
    </form>
  );
};
