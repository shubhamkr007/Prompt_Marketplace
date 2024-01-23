import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setCat } from "../redux/category"


const CategorySlider = () => {

    const dispatch = useDispatch()
    const slideLeft = () => {
        var slider = document.getElementById('category_slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('category_slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    return (
        <>
            <div className='relative flex items-center'>
                <MdChevronLeft className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
                <div
                    id='category_slider'
                    className='w-full flex gap-4 h-full overflow-y-scroll no-scrollbar whitespace-nowrap scroll-smooth scrollbar-hide'
                >

                    <Link to={"/categories"} onClick={()=>dispatch(setCat("GitHub Copilot"))} className='cursor-pointer'>
                        <div className="da mt-8 relative flex flex-col  max-h-[400px] justify-center overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div className="group relative m-0 flex h-40 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src="/assets/Copilot.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/categories"} onClick={()=>dispatch(setCat("Chatgpt"))} className='cursor-pointer'>
                        <div className="da mt-8 relative flex flex-col  max-h-[400px] justify-center overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div className="group relative m-0 flex h-40 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src="/assets/chat_gpt.png" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/categories"} onClick={()=>dispatch(setCat("Bard AI"))} className='cursor-pointer'>
                        <div className="da mt-8 relative flex flex-col  max-h-[400px] justify-center overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div className="group relative m-0 flex h-40 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src="/assets/bard.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/categories"} onClick={()=>dispatch(setCat("Copyai"))} className='cursor-pointer'>
                        <div className="da mt-8 relative flex flex-col  max-h-[400px] justify-center overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div className="group relative m-0 flex h-40 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src="/assets/copyai.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/categories"} onClick={()=>dispatch(setCat("MidJourney"))} className='cursor-pointer'>
                        <div className="da mt-8 relative flex flex-col  max-h-[400px] justify-center overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div className="group relative m-0 flex h-40 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src="/assets/mid-journey.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/categories"} onClick={()=>dispatch(setCat("Bing Chat"))} className='cursor-pointer'>
                        <div className="da mt-8 relative flex flex-col  max-h-[400px] justify-center overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div className="group relative m-0 flex h-40 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src="/assets/bing.png" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link to={"/categories"} onClick={()=>dispatch(setCat("DALL-E"))} className='cursor-pointer'>
                        <div className="da mt-8 relative flex flex-col  max-h-[400px] justify-center overflow-hidden bg-gray-50">
                            <div className="absolute inset-0 bg-center dark:bg-black"></div>
                            <div className="group relative m-0 flex h-40 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                                <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                    <img src="/assets/dalle.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-150" alt="" />
                                </div>
                            </div>
                        </div>
                    </Link>
                    
                </div>
                <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
            </div>
        </>
    )
}

export default CategorySlider