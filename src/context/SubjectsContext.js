import { createContext, useContext } from 'react';

export const SubjectsContext = createContext();

export const useSubjects = () => useContext(SubjectsContext);
