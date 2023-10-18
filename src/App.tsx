import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <>hola</>,
  },
  {
    path: '/login',
    element: <>login</>,
  },
  {
    path: '/test',
    element: <>test</>,
  }
])

function App() {
  return (
    <>
      <Header/>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
