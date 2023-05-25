import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/login/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Books from './components/books/books';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login/>} />
          <Route path='/' element={<Books />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
