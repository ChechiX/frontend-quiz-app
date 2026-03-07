import { Link } from 'react-router';
import { useSubjects } from '../context/SubjectsContext.js';

export const SubjectItem = ({ subject, icon }) => {
  const { resetScore } = useSubjects();
  const normalizedSubject = subject.toLowerCase();

  return (
    <li className="subject-item">
      <Link
        className="subject-item__button"
        to={`/quiz/${normalizedSubject}/1`}
        onClick={() => resetScore(normalizedSubject)}
      >
        <div className={`subject-icon-container subject-${normalizedSubject}`}>
          <img className="subject-icon" src={icon} alt={`${subject} icon`} />
        </div>

        <p className="subject-item__name">{subject}</p>
      </Link>
    </li>
  );
};
