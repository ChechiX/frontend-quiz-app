import { useParams } from 'react-router';
// import { AnswerOption } from './AnswerOption';
import { useSubjects } from '../context/SubjectsContext';
import { ProgressBar } from './ProgressBar';

export const QuizForm = () => {
  const { subject, questionNumber } = useParams();
  const { subjects } = useSubjects();

  const quiz = subjects.find((quiz) => quiz.title.toLowerCase() === subject);
  const totalQuestions = quiz ? quiz.questions.length : 0;
  const { question } = quiz ? quiz.questions[questionNumber - 1] : null;
  // console.log(question); más propiedades para obtener

  return (
    <form className="quiz-form">
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

      {/* <AnswerOption answer="4.5:1" /> */}
    </form>
  );
};
