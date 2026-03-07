import { useCallback, useEffect, useState } from 'react';
import { SubjectsContext } from './SubjectsContext.js';

export const SubjectsProvider = ({ children }) => {
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeSubject, setActiveSubject] = useState(null);
  const [score, setScore] = useState(0);

  const getScoreStorageKey = useCallback((subject) => {
    return `quizScore:${subject}`;
  }, []);

  const loadScoreForSubject = useCallback(
    (subject) => {
      if (!subject) return 0;

      const storedScore = localStorage.getItem(getScoreStorageKey(subject));
      const parsedScore = Number.parseInt(storedScore ?? '0', 10);

      return Number.isNaN(parsedScore) ? 0 : parsedScore;
    },
    [getScoreStorageKey],
  );

  const setActiveSubjectScore = useCallback(
    (subject) => {
      if (!subject) return;
      setActiveSubject(subject);
      setScore(loadScoreForSubject(subject));
    },
    [loadScoreForSubject],
  );

  const incrementScore = useCallback(() => {
    setScore((prevScore) => prevScore + 1);
  }, []);

  const resetScore = useCallback(
    (subject) => {
      const subjectKey = subject ?? activeSubject;

      if (subjectKey) {
        localStorage.removeItem(getScoreStorageKey(subjectKey));
      }

      if (!subjectKey || subjectKey === activeSubject) {
        setScore(0);
      }
    },
    [activeSubject, getScoreStorageKey],
  );

  useEffect(() => {
    if (!activeSubject) return;
    localStorage.setItem(getScoreStorageKey(activeSubject), String(score));
  }, [activeSubject, getScoreStorageKey, score]);

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
      value={{
        subjects,
        loading,
        score,
        incrementScore,
        resetScore,
        setActiveSubject: setActiveSubjectScore,
      }}
    >
      {children}
    </SubjectsContext.Provider>
  );
};
