import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import About from "./pages/About"
import Contact from "./pages/Contact"
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider}  from 'react-router-dom'
import Login from './pages/Login';
import NewPrompts from './pages/NewPrompts';
import Signup from './pages/Signup';
import MyCollection from './pages/MyCollection';
import { store } from './redux';
import { Provider } from 'react-redux';
import Prompt from './pages/Prompt';
import Pricing from './pages/Pricing';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home/>}/>
      <Route path='categories' element={<Categories/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='newprompts' element={<NewPrompts/>}/>
      <Route path='signup' element={<Signup/>}/>
      <Route path='/prompt/:id' element={<Prompt/>}/>
      <Route path='/userPrompts' element={<MyCollection/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);
