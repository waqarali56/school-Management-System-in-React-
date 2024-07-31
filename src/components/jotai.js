import {atom} from 'jotai';
import { students as initialStudents } from './data.js';

export const loginEmailAtom=atom('');
export const loginPasswordAtom=atom('');
export const ClassAtom=atom('');
export const StudentAtom= atom(initialStudents);
export const status=atom(false);