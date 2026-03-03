import { ThemeToggleButton } from './ThemeToggleButton';

export const ThemeToggleHeader = ({ icon, subjectName }) => {
  return (
    <header
      className={`header ${icon && subjectName ? 'header--with-subject-icon' : 'header--simple'}`}
    >
      {icon && subjectName && (
        <div className="header__subject-info">
          <div
            className={`subject-icon-header-container subject-${subjectName.toLowerCase()}`}
          >
            <img
              className="subject-icon"
              src={icon}
              alt={`${subjectName} icon`}
            />
          </div>

          <h1 className="header__title">{subjectName}</h1>
        </div>
      )}

      <ThemeToggleButton />
    </header>
  );
};
