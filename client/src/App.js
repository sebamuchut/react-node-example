import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={ <LoginForm /> } />
        <Route path='/home' element={ <Home /> } />
      </Routes>
    </div>
  );
}

export default App;
