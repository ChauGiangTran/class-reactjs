import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginLayout from './layout/LoginLayout';
import MainLayout from './layout/MainLayout';

import Login from './routes/Login';
import Register from './routes/Register';
import AdminClassList from './routes/Admin/ClassList';
import AdminTeacherList from './routes/Admin/TeacherList';
import AdminStudentList from './routes/Admin/StudentList';
import TeacherClassList from './routes/Teacher/ClassList';
import TeacherStudentList from './routes/Teacher/StudentList';
import StudentClassList from './routes/Student/ClassList';
import StudentClassRegist from './routes/Student/ClassRegistration';
import ProfileUser from './routes/ProfileUser';
import Chat from './routes/Chat';
class App extends React.Component {

	render() {
		return (
			<Router>
				<Routes>
					<Route element={<LoginLayout />}>
						<Route path="/" element={<Login />} />
						<Route path="/register" element={<Register />} />
					</Route>
					<Route element={<MainLayout />}>
						<Route path="/admin/class" element={<AdminClassList />} />
						<Route path="/admin/teacher" element={<AdminTeacherList />} />
						<Route path="/admin/student" element={<AdminStudentList />} />
						<Route path="/teacher/class" element={<TeacherClassList />} />
						<Route path="/teacher/student" element={<TeacherStudentList />} />
						<Route path="/student/class" element={<StudentClassList />} />
						<Route path="/student/class_registration" element={<StudentClassRegist />} />
						<Route path="/profile" element={<ProfileUser />} />
						<Route path="/chat" element={<Chat />} />
					</Route>
				</Routes>
			</Router>
		);
	}
}


export default App;
