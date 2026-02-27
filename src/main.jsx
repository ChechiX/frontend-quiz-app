import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.scss';
import { FrontendQuizApp } from './FrontendQuizApp';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FrontendQuizApp />
  </StrictMode>,
);
