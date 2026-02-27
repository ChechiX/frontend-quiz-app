export const SubjectItem = ({ subject, icon }) => {
  return (
    <li className="subject-item">
      <button className="subject-item__button">
        <div
          className={`subject-icon-container subject-${subject.toLowerCase()}`}
        >
          <img className="subject-icon" src={icon} alt={`${subject} icon`} />
        </div>

        <p className="subject-item__name">{subject}</p>
      </button>
    </li>
  );
};
