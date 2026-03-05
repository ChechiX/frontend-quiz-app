import { Link, useParams } from 'react-router';
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

      <div className="results">
        <div className="results__text-container">
          <h1 className="results__title">Quiz completed</h1>

          <h2 className="results__subtitle">You scored...</h2>
        </div>

        <div className="results__container">
          <section className="results__score">
            <div className="results__score--container">
              <p className="score">{score}</p>

              <p className="results__total">
                out of {subjectData.questions.length}
              </p>
            </div>
          </section>

          <Link className="results__button" to="/">
            Play Again
          </Link>
        </div>
      </div>
    </>
  );
};
