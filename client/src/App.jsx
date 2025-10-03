

import React, { useContext } from 'react'
import { Routes, Route, useLocation, useMatch } from 'react-router-dom'
import Navbar from './components/student/Navbar.jsx'
import Home from './pages/student/Home.jsx'
import CourseDetails from './pages/student/CourseDetails.jsx'
import CoursesList from './pages/student/CoursesList.jsx'
import Dashboard from './pages/educator/Dashboard.jsx'
import AddCourse from './pages/educator/AddCourse.jsx'
import MyCourses from './pages/educator/MyCourses.jsx'
import StudentsEnrolled from './pages/educator/StudentsEnrolled.jsx'
import Educator from './pages/educator/Educator.jsx'
import 'quill/dist/quill.snow.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import Player from './pages/student/Player.jsx'
import MyEnrollments from './pages/student/MyEnrollments.jsx'
import Loading from './components/student/Loading.jsx'

const App = () => {

  const isEducatorRoute = useMatch('/educator/*');

  return (
    <div className="text-default min-h-screen bg-white">
      <ToastContainer />
      {/* Render Student Navbar only if not on educator routes */}
      {!isEducatorRoute && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/course-list" element={<CoursesList />} />
        <Route path="/course-list/:input" element={<CoursesList />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />
        <Route path='/educator' element={<Educator />}>
          <Route path='/educator' element={<Dashboard />} />
          <Route path='add-course' element={<AddCourse />} />
          <Route path='my-courses' element={<MyCourses />} />
          <Route path='student-enrolled' element={<StudentsEnrolled />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
