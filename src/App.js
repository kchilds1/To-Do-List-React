import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import Login from './pages/Login';
import NavBar from './components/NavBar/NavBar';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home />,
  },
  {
    path:'/ToDoList',
    element: <ToDoList />,
  },
  {
    path:'/login',
    element: <Login />
  }
]);

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <NavBar />
      <RouterProvider router={router} />
      <Particles options={particlesOptions} init={particlesInit} />
    </div>
  );
}

export default App;
