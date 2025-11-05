import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import Error from "./Pages/Error"
import Home from "./Pages/Home"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
