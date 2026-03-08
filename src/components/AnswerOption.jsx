import correctIcon from '../assets/images/icon-correct.svg';
import incorrectIcon from '../assets/images/icon-incorrect.svg';

export const AnswerOption = ({
  answer,
  letter,
  id,
  setSelectedOption,
  isSelected,
  isCorrect,
  isIncorrect,
  showFeedback,
}) => {
  let optionClass = 'answer-option';

  if (isCorrect && isSelected) optionClass += ' answer-option--correct';
  else if (isIncorrect) optionClass += ' answer-option--incorrect';
  // else if (isSelected) optionClass += ' answer-option--selected';

  return (
    <div className={optionClass}>
      <input
        className="answer-option__input"
        type="radio"
        id={id}
        name="answers"
        checked={isSelected}
        onChange={setSelectedOption}
        disabled={showFeedback}
      />
      <label htmlFor={id} className="answer-option__label">
        <div className="answer-letter">
          <span className="answer-option__letter">{letter}</span>
        </div>

        {answer}

        {showFeedback && (isCorrect || isIncorrect) && (
          <img
            className="answer-option__icon"
            src={isCorrect ? correctIcon : incorrectIcon}
            alt={isCorrect ? 'Correct' : 'Incorrect'}
          />
        )}
      </label>
    </div>
  );
};
