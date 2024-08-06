import {atom} from 'jotai';
import { students as initialStudents } from './data.js';
import { classes as initialClassess } from './data.js';
import { teachers as initialTeachers } from './data.js';



const getInitialLoginState = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : false;
};

export const teacherLoginStatus = atom(getInitialLoginState('teacherLogin'));
export const adminLoginStatus = atom(getInitialLoginState('adminLogin'));
export const studentLoginStatus = atom(getInitialLoginState('studentLogin'));



export const loginEmailAtom=atom('');
export const loginPasswordAtom=atom('');



export const ClassAtom=atom('');


export const StudentAtom= atom(initialStudents);
export const teachersAtom= atom(initialTeachers);
export const classesAtom= atom(initialClassess);
