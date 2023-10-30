import './App.css';
import { Routes, Route } from "react-router-dom"
import { Login } from './pages/login';
import { SignUp } from './pages/signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
