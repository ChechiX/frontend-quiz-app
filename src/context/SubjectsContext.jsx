import { useEffect, useState } from 'react';
import { SubjectsContext } from './SubjectsContext.js';

export const SubjectsProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setSubjects(data.quizzes);
        setLoading(false);
      });
  }, []);

  return (
    <SubjectsContext.Provider value={{ subjects, loading }}>
      {children}
    </SubjectsContext.Provider>
  );
};
