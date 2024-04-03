import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/School/Home';
import Teachers from './pages/School/Teachers';
import { useContext } from 'react';
import { ApiContextProvider } from './context/ApiContext';
import { SchoolWebsite } from './pages/School/SchoolWebsite';

function App() {
  const apiContext = useContext(ApiContextProvider)
  return (
    <div>
      {/* {message} */}
      <div className={`
      bg-orange-800 text-white min-w-52 transition-all rounded-md fixed translate-x-[-50%] z-[60] left-[50%]
      ${apiContext?.message ? "p-2 mt-1" : "p-0 -mt-12"}
      `}>
        <p>{apiContext?.message}</p>
      </div>

      <Routes>
        <Route element={<Login />} path='/auth/login' />

        {/* school */}
        <Route element={<Home />} path='' />
        <Route element={<SchoolWebsite />} path='/school/:name/:id' />
        <Route element={<Teachers />} path='/school/teachers' />
      </Routes>
    </div>
  );
}

export default App;
