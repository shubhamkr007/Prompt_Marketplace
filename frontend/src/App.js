import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import {Toaster} from 'react-hot-toast';
import { getCurrentUser } from './redux/authRedux/authActions';
import { useEffect, useState } from 'react';
import API from './services/API.js'
import { useDispatch } from 'react-redux';
import { getPrompts } from './redux/promptRedux/promptAction.js';
function App() {

  const dispatch = useDispatch();
  const getUser= async()=>{
    try{

        const response = await API("api/v1/auth/current-user", {
          method: "GET", // or any other HTTP method
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        const data = await response.json();
        // console.log(data);
        if(data?.success){
          dispatch(getCurrentUser(data));
        }
    }catch(error){
        localStorage.clear();
        console.log(error)
    }
  }
  const getData= async()=>{
    try{

      const response = await API("api/v1/prompt/getall", {
        method: "GET", // or any other HTTP method
        headers: {
          "Content-Type": "application/json",
        },
      });
    
        const data = await response.json();
        // console.log(data);
        if(data?.success){
          dispatch(getPrompts(data));
        }
    }catch(error){
        console.log(error)
    }
  }

  useEffect(()=>{
    getData();
    getUser();
  })
  
  return (
    <div>
      <div><Toaster/></div>
      <Header/>
      <main className='pt-16 bg-slate-100 min-h-[calc(100vh)]'>
        <Outlet/>
      </main>
    </div>
  );
}

export default App;
