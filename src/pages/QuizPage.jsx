import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useSubjects } from '../context/SubjectsContext.js';
import { ThemeToggleHeader } from '../components/ThemeToggleHeader';
import { QuizForm } from '../components/QuizForm.jsx';

export const QuizPage = () => {
  const { subject } = useParams();
  const { subjects, loading, setActiveSubject } = useSubjects();

  useEffect(() => {
    setActiveSubject(subject);
  }, [subject, setActiveSubject]);

  if (loading) return <div>Loading...</div>;

  // Buscar el subject seleccionado
  const subjectData = subjects.find((s) => s.title.toLowerCase() === subject);

  if (!subjectData) return <div>Subject not found</div>;

  return (
    <>
      <ThemeToggleHeader
        icon={subjectData.icon}
        subjectName={subjectData.title}
      />

      <QuizForm />
    </>
  );
};
