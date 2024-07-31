import React from 'react'
import{useAtom} from 'jotai';
import TeacherLoginPage from './TeacherLoginPage.jsx';
import TeacherDashBoard from './TeacherDashBoard.jsx';
import { status } from '../jotai.js';

export default function Teacher() {

   
    const [teacherLoginStatus,setTeacherLoginStatus]=useAtom(status);

 

  return (
   <>
   {teacherLoginStatus===false?<TeacherLoginPage/>:<TeacherDashBoard/>}
   </>
  )
}
