import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { BiHide, BiShowAlt } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginRedux } from '../redux/userSlice';

const Login = () => {

    const [showPassword, setShowPassord] = useState(false);
    const navigete = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const userData = useSelector((state) => state.user)
    const dispatch = useDispatch();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(!email || !password){
            toast.error('Please Enter required Fields')
            return;
        }else{
            

            const data = {
                email,
                password,
            }
            
            const fetchData = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/auth/login`,{
                method: "POST",
                headers: {'Content-Type' : 'application/json'},
                body: JSON.stringify(data)
            })
            
            const response = await fetchData.json()
            // console.log(response);
            if(response.success){
                localStorage.setItem('token', response.token)
                toast.success(userData.firstName + response.message);

                dispatch(loginRedux(response.user))
                window.location.replace('/');
            }else{
                toast.error(response.message);
                return;
            }
        }
    }

  return (
    <div className='p-3 md:p-4'>
            <div className="w-full rounded-xl max-w-sm bg-white m-auto flex items-center flex-col p4">
                <h1 className='text-center text-2xl font-bold mt-2'>Log In</h1>
                <div>
                    <img src="/assets/user.gif" alt="" />
                </div>

                <form className='mb-5 flex flex-col' onSubmit={handleSubmit}>
                    
                    <div>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id='email' 
                            placeholder="email" 
                            className="input input-bordered input-sm w-full max-w-xs" 
                            onClick={(e)=> setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mt-3 max-w-xs relative'>
                        <label htmlFor="password">Password</label>
                        <div className='flex'>
                            <input 
                            type={showPassword ? "text" : "password"} 
                            id='password' 
                            placeholder="password" 
                            className="input input-bordered input-sm w-full max-w-xs" 
                            onChange={(e)=> setPassword(e.target.value)}
                        />
                        <span className='absolute right-1 top-7 text-xl cursor-pointer' onClick={() => setShowPassord((prev) => !prev)}>{showPassword ? <BiHide /> : <BiShowAlt />}</span>
                        </div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button className=" mt-4 sm:btn-sm md:btn-md lg:btn-sm btn sm:btn-wide md:btn-wide lg:btn-wide btn-info">LOGIN</button>
                    </div>
                    <div className='mt-3'>Create a new account?  <Link to={"/signup"} className='text-red-400'><u>Signup</u></Link></div>
                </form>
            </div>
        </div>
  )
}

export default Login