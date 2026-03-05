import { useCallback, useEffect, useState } from 'react';
import { SubjectsContext } from './SubjectsContext.js';

export const SubjectsProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const incrementScore = useCallback(() => {
    setScore((prevScore) => prevScore + 1);
  }, []);

  const resetScore = useCallback(() => {
    setScore(0);
  }, []);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        setSubjects(data.quizzes);
        setLoading(false);
      });
  }, []);

  return (
    <SubjectsContext.Provider
      value={{ subjects, loading, score, incrementScore, resetScore }}
    >
      {children}
    </SubjectsContext.Provider>
  );
};
