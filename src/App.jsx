import React from "react"; // Make sure to import React if not already
import Layout from "./components/layout/Layout";
import "./App.css";
import Home from "./components/Home";
import Teacher from "./components/Teacher/Teacher";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Admin from "./components/Admin/Admin";
import TeachersList from "./components/Admin/TeachersList";
import StudentsList from "./components/Admin/StudentsList";
import AddTeacher from "./components/Admin/AddTeacher";
import AddStudent from "./components/Admin/AddStudent";
import ClassList from "./components/Admin/ClassList";
import AddClass from "./components/Admin/AddClass";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Admin" element={<Admin />}>
            <Route path="ClassList" element={<ClassList />} />
            <Route path="AddClass" element={<AddClass />} />
              <Route path="Teachers" element={<TeachersList />} />
              <Route path="AddTeacher" element={<AddTeacher />} />
              <Route path="Students" element={<StudentsList />} />
              <Route path="AddStudent" element={<AddStudent />} />
            </Route>
            <Route path="/Teacher" element={<Teacher />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
