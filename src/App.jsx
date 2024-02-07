import './App.css'
import {MainTitle, SecondTitle} from './components/mainTitle/MainTitle'
import Button from './components/button/Button'
import Parents from './pages/Parents'
import SwitchTheme from './components/switchTheme/SwitchTheme'
import StudentList from './components/studentList/StudentList'
import Login from './pages/login/Login'
import Form from './pages/Form'
import Count from './pages/count/Count'
import { userContext } from './store/userContext'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Nav from './pages/Nav'
// import Child1 from './pages/Child1'

function App() {
  const userName = 'Admin'

  return (
    <userContext.Provider value={userName}>
      <BrowserRouter>
      <Nav/>
      {/* <nav>
        <Link to="/about">About</Link>
        <Link to="/contect">Contect</Link>
        <Link to="/blog">Blog</Link>
      </nav> */}
      <Routes>
        <Route path="/" />
        <Route path='/about' element={<About/>}/>
        <Route path='/contect' element={<Contact/>}/>
        <Route path='/blog' element={<Blog/>}/>
   
   
      </Routes>
      </BrowserRouter>
        <MainTitle title="Title1"/>
        <MainTitle title=" Hello Title1"/> 
        <SecondTitle title="Hello World"/>
        <Button/>
        <Parents/>
        <SwitchTheme/>
        <StudentList/>
        <Login/>
        <Form/>
        <Count/>
    </userContext.Provider>
  )
}
export default App