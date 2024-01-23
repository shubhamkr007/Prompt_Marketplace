import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import HomeCard from '../components/HomeCard';
import { FaRegCopy } from "react-icons/fa";
import copy from "copy-to-clipboard";
import toast from 'react-hot-toast';
import Modal from '../components/Modal';

const Prompt = () => {

  const [data, setData] = useState({});
  const [categoryData, setCategoryData] = useState([]);
  const [flag, setFlag] = useState(true);
  const [flag2, setFlag2] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const id = useParams().id;

  const getData = async () => {
    try {
      // console.log(userData?.user?._id);
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/prompt/${id}`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: userData?.user?._id })
      })

      const response = await fetchData.json()
      // console.log(response);
      setData(response?.prompt);
      getCategoryData(response?.prompt.category);

    } catch (error) {
      console.log(error)
    }
  }

  const getCategoryData = async (cat) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/api/v1/category/${cat}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const temp = await response.json();
      setCategoryData(temp.prompts);

    } catch (error) {
      console.log(error)
    }
  }


  const userData = useSelector((state) => state.auth);
  // console.log(data);
  // console.log(userData);


  if(userData?.user && flag2){
    getData();
    setFlag2(false);
  }

  if ((!userData.loading && !userData?.user && flag)) {
    getData();
    setFlag(false);
  }

  const handleCopy = () => {
    copy(data.promptData);
    toast.success("Prompt Copied to Clipboard");
  }

  const handleBuyNow = () =>{
    // console.log(data.promptData);
    if(data.promptData === "Login To access"){
      alert("Please Login to Access");
      navigate("/login");
    }
    else{
      setShowModal(true);
    }
  }


  return (
    <div>

{showModal ? (
                <Modal getData={getData} setShowModal={setShowModal} data={data} setData={setData} userData={userData.user}/>
            ) : null}

      {data._id && <div>

        <div className='m-5'>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure>
              <img src={data.imageUrl} alt="Album" className='h-[500px] w-[600px] ' />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl">
                {data.name}
                <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">{data.category}</span>
              </h2>
              <h1 className='text-xl'>About</h1>
              <div className='max-w-[700px]'>{data.promptDescription}</div>

              {data.promptData !== "Login To access" && data.promptData !== "Unauthorized" ?
                <div className='max-w-4xl max-h-[100px]'>
                  <div className="mt-5 text-xl font-medium text-gray-900 dark:text-white">Get Your Prompt</div>
                  <span onClick={handleCopy} className="bg-blue-100 flex float-end mb-2 cursor-pointer text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300"><FaRegCopy />Copy</span>
                  <div className="max-h-[150px] overflow-y-scroll block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >{data.promptData}</div>
                </div> :
                <div className='h-full w-full flex items-end justify-end p-4 gap-3'>
                  <div className='text-2xl px-5 py-2.5 text-center me-2 mb-2'>Credit:  {data.price}</div>
                  <button onClick={handleBuyNow} type="button"className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                        BUY NOW
                    </button>
                </div>
              }


              
            </div>
          </div>
        </div>

        <div className='text-3xl m-4'>
          More from {data.category}
        </div>
        <div className="grid lg:grid-cols-5 gap-2 md:grid-cols-2 sm:grid-cols-1">
          {categoryData.length > 0 ? categoryData
            // .filter(item => id !== item._id)
            .map((item) => (
              <div className='m-2'>
                <HomeCard name={item.name} image={item.imageUrl} category={item.category} price={item.price} promptDescription={item.promptDescription} promptData={item.promptData} id={item._id} />
              </div>
            ))
            :
            <h1 className='text-2xl'>Loading...</h1>}
        </div>

      </div>}

    </div>
  )
}

export default Prompt