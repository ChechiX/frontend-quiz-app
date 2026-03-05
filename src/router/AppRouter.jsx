import { Route, Routes } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { QuizPage } from '../pages/QuizPage';
import { ResultsPage } from '../pages/ResultsPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz/:subject/:questionNumber" element={<QuizPage />} />
      <Route path="/quiz/:subject/results" element={<ResultsPage />} />
    </Routes>
  );
};
