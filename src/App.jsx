import React ,{ useEffect } from "react"; // Make sure to import React if not already
import Layout from "./components/layout/Layout";
import Home from "./components/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import TeachersList from "./components/Admin/TeachersList";
import StudentsList from "./components/Admin/StudentsList";
import AddTeacher from "./components/Admin/AddTeacher";
import AddStudent from "./components/Admin/AddStudent";
import ClassList from "./components/Admin/ClassList";
import AddClass from "./components/Admin/AddClass";
import TeacherDashBoard from "./components/Teacher/TeacherDashBoard";
import AdminDashBoard from "./components/Admin/AdminDashBoard";
import { useAtom } from "jotai";
import {
  adminLoginStatus,
  studentLoginStatus,
  teacherLoginStatus,
} from "./components/jotai";
import StudentDashBoard from "./components/Student/StudentDashBoard";

function App() {
  const [teacherLogin, setTeacherLogin] = useAtom(teacherLoginStatus);
  const [adminLogin, setAdminLogin] = useAtom(adminLoginStatus);
  const [studentLogin, setStudentLogin] = useAtom(studentLoginStatus);

  useEffect(() => {
    localStorage.setItem('teacherLogin', JSON.stringify(teacherLogin));
  }, [teacherLogin]);

  useEffect(() => {
    localStorage.setItem('adminLogin', JSON.stringify(adminLogin));
  }, [adminLogin]);

  useEffect(() => {
    localStorage.setItem('studentLogin', JSON.stringify(studentLogin));
  }, [studentLogin]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {adminLogin && (
            <Route path="/Admin" element={<AdminDashBoard />}>
              <Route path="ClassList" element={<ClassList />} />
              <Route path="AddClass" element={<AddClass />} />
              <Route path="Teacherslist" element={<TeachersList/>} />
              <Route path="AddTeacher" element={<AddTeacher />} />
          
              <Route path="StudentsList" element={<StudentsList/>} />
              <Route path="AddStudent" element={<AddStudent />} />
            </Route>
          )}
          {teacherLogin && (
            <Route path="/Teacher" element={<TeacherDashBoard />} />
          )}
          {studentLogin && (
            <Route path="/Student" element={<StudentDashBoard />} />
          )}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
