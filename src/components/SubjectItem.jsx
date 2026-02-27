export const SubjectItem = ({ subject, icon }) => {
  return (
    <li className="subject-item">
      <button className="subject-item__button">
        <img
          className={`subject-icon subject-${subject.toLowerCase()}`}
          src={icon}
          alt={`${subject} icon`}
        />

        <p className="subject-item__name">{subject}</p>
      </button>
    </li>
  );
};
