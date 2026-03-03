import { Link } from 'react-router';

export const SubjectItem = ({ subject, icon }) => {
  return (
    <li className="subject-item">
      <Link
        className="subject-item__button"
        to={`/quiz/${subject.toLowerCase()}/1`}
      >
        <div
          className={`subject-icon-container subject-${subject.toLowerCase()}`}
        >
          <img className="subject-icon" src={icon} alt={`${subject} icon`} />
        </div>

        <p className="subject-item__name">{subject}</p>
      </Link>
    </li>
  );
};
