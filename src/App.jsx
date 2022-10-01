import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './routes/Home'
import Users from './routes/Users'
import About from './routes/About'
import Layout from './Layout'
import User from './routes/User'
import './App.css'


const Routing = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="users" element={<Users />} >
        <Route index element={<div>Seleccione algo</div>} />
        <Route path=":id" element={<User />} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Route>
  </Routes>
)

function App() {

  return (
    <div className="App">
      {/* <Navbar /> */}
      <Routing />
    </div>
  )
}

export default App
