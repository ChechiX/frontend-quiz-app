import { SubjectList } from './components/SubjectList';
import { ThemeToggleHeader } from './components/ThemeToggleHeader';

export const FrontendQuizApp = () => {
  return (
    <>
      <ThemeToggleHeader />

      <main className="container">
        <header className="header-container">
          <div className="title-container">
            <h2 className="title-container__subtitle">Welcome to the</h2>

            <h1 className="title-container__title">Frontend Quiz!</h1>
          </div>

          <p className="header-container__description">
            Pick a subject to get started.
          </p>
        </header>

        <SubjectList />
      </main>
    </>
  );
};
