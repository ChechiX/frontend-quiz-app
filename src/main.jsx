import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router';

import './index.scss';
import { FrontendQuizApp } from './FrontendQuizApp';
import { SubjectsProvider } from './context/SubjectsContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SubjectsProvider>
      <BrowserRouter>
        <FrontendQuizApp />
      </BrowserRouter>
    </SubjectsProvider>
  </StrictMode>,
);
