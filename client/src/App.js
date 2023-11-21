import BigButtons from "./components/Buttons";
import Admin from './components/Admin';
import User from './components/User';
import React from "react";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<BigButtons />} />
      <Route path="/User" element={<User />} />
      <Route path="/Admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
