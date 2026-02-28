import { useState, useEffect } from 'react';
import { SubjectItem } from './SubjectItem';

export const SubjectList = () => {
  const [subjects, setSubjects] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setSubjects(data.quizzes);
        // setLoading(false);
      });
    // .catch((err) => {
    //   setError(err.message);
    //   setLoading(false);
    // });
  }, []);

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
