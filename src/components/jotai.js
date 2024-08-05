import {atom} from 'jotai';
import { students as initialStudents } from './data.js';
import { classes as initialClassess } from './data.js';
import { teachers as initialTeachers } from './data.js';

export const loginEmailAtom=atom('');
export const loginPasswordAtom=atom('');
export const adminLoginEmailAtom=atom('');
export const adminLoginPasswordAtom=atom('');
export const teacherStatus=atom(false);
export const adminStatus=atom(false);

export const ClassAtom=atom('');


export const StudentAtom= atom(initialStudents);
export const teachersAtom= atom(initialTeachers);
export const classesAtom= atom(initialClassess);
