import React, { useEffect, useState } from 'react'
import API from '../services/API'
import { Link } from 'react-router-dom';

const MyCollection = () => {

  const [data, setDate] = useState([]);


  const getData = async () => {
    try {

      const response = await API("api/v1/prompt/userPrompts", {
        method: "GET", // or any other HTTP method
        headers: {
          "Content-Type": "application/json",
        },
      });

      const res = await response.json();
      if(!res.success){
         alert(res.message);

      }
      // console.log(res);
      setDate(res.userPrompts)
    } catch (error) {
      // localStorage.clear();
      console.log(error)
    }
  }

  useEffect(() => {
    getData();
  }, [])
  console.log(data);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
        <h2 className="text-4xl font-bold text-center lg:text-left mb-3 leading-tight tracking-tight text-gray-900">My Collection</h2>

  <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-7">

    {data.length > 0 ? data.map((item) => (

      <>
    <Link to={`/prompt/${item._id}`} className="relative cursor-pointer w-full flex items-end rounded-3xl justify-start text-left bg-cover bg-center" style={{height: 450, backgroundImage: `url(${item.imageUrl})`}}>
      <div className="absolute top-0 mt-20 right-0 bottom-0 left-0 bg-gradient-to-b rounded-3xl from-transparent to-gray-900">
      </div>
      <div className="absolute top-0 right-0 left-0 mx-5 mt-2 flex justify-between items-center rounded-3xl">
      <div className="bg-indigo-500 text-white text-xs font-medium me-2 px-2.5 py-0.5 rounded-full">{item.category}</div>
      </div>
      <main className="p-5 z-10 rounded-3xl">
        <div className="text-md tracking-tight font-medium leading-7 font-regular text-white hover:underline">
          {item.name}
        </div>
      </main>
    </Link>
    
      </>

      

    ))
  : <div>
    No Prompts Yet ...
  </div>}

    


    


  </div>
</div>

    </div>
  )
}

export default MyCollection