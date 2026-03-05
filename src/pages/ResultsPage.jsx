import { useParams } from 'react-router';
import { useSubjects } from '../context/SubjectsContext';
import { ThemeToggleHeader } from '../components/ThemeToggleHeader';

export const ResultsPage = () => {
  const { subject } = useParams();
  const { subjects, loading, score } = useSubjects();

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

      <div>{score}</div>
    </>
  );
};
