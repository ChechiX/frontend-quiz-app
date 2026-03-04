export const ProgressBar = ({ currentQuestion, totalQuestions }) => {
  return (
    <div className="progress-bar">
      <div
        className="progress-bar__fill"
        style={{ width: `${(currentQuestion / totalQuestions) * 100}%` }}
      ></div>
    </div>
  );
};
