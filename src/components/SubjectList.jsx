import { useSubjects } from '../context/SubjectsContext.js';
import { SubjectItem } from './SubjectItem';

export const SubjectList = () => {
  const { subjects } = useSubjects();

  return (
    <section className="subject-list">
      <ul className="subjects-container">
        {subjects.map((subject, index) => (
          <SubjectItem
            key={index}
            subject={subject.title}
            icon={subject.icon}
          />
        ))}
      </ul>
    </section>
  );
};
