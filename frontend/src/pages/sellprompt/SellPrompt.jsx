import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { useAuth } from '../../AuthContext'

function SellPrompt() {

    const {isLoggedIn} = useAuth();
    if (!isLoggedIn) {
        return (
            <div className='max-h-full max-w-full bg-slate-900 h-screen pb-10'>
                <Navbar />
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl dark:text-white">
                        Please Login to Sell a Prompt
                    </h1>
                </div>
            </div>
        )
    }

    return (
        <div className='max-h-full max-w-full bg-slate-900 pb-10'>
            <Navbar />
            <div className='flex flex-col ml-40 mt-4 mx-auto max-w-5xl'>

                <label for="Name" className="block mt-2 mb-2 text-sm font-medium text-white">Prompt Title</label>
                <input
                    type="text"
                    id='title'
                    placeholder=''

                    className='h-10 w-50 text-sm bg-slate-800 border-2 rounded-lg  
                    border-white border-opacity-50 outline-none focus:border-white
                    focus:text-white transition duration-200 ease-in-out drop-shadow-2xl
                    '/>


                <label for="Name" className="block mt-2 mb-2 text-sm font-medium text-white">Upload Prompt Cover Image</label>
                <input
                    id="file_input"
                    type="file"
                    className="h-7 w-1/2 block  bg-slate-800 text-sm text-white border
                    border-gray-300 rounded-lg cursor-pointer bg-black dark:text-gray-400 focus:outline-none
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white"
                />

                <label for="Description" className="block mt-2 mb-2 text-sm font-medium text-white">Prompt Description</label>
                <textarea
                    type="text"
                    id='description'
                    placeholder=''
                    rows={4}

                    className='h-22 w-50  text-sm  bg-slate-800 border-2 rounded-lg  
                    border-white border-opacity-50 outline-none focus:border-white
                    focus:text-white transition duration-200 ease-in-out drop-shadow-2xl
                '/>

                <label for="type" className="block mt-2 mb-2 text-sm font-medium text-white">Prompt Type</label>
                <select id="price" className="w-50 bg-slate-800 border border-gray-300 text-white text-sm rounded-lg focus:border-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-white">
                    <option selected>Select Prompt Type</option>
                    <option value="">DALL-E</option>
                    <option value="">GPT</option>
                    <option value="">Midjourney</option>
                    <option value="">Stable Diffusion</option>
                </select>

                <label for="price" className="block mt-2 mb-2 text-sm font-medium text-white">Estimated Price</label>
                <select id="price" className="w-50 bg-slate-800 border border-gray-300 text-white text-sm rounded-lg focus:border-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-white">
                    <option selected>Price</option>
                    <option value="">$2</option>
                    <option value="">$3</option>
                    <option value="">$4</option>
                    <option value="">$5</option>
                </select>


                <label for="Prompt" className="block mt-2 mb-2 text-sm font-medium text-white">*Prompt<br /><i><small>Copy and paste your prompt below. Ensure any editable parts of your prompt are indicated by [square brackets]</small></i></label>
                <textarea
                    type="text"
                    id='description'
                    placeholder='Copy and paste your prompt here.'
                    rows={4}

                    className='h-22 w-50  text-sm  bg-slate-800 border-2 rounded-lg  
                    border-white border-opacity-50 outline-none focus:border-white
                    focus:text-white transition duration-200 ease-in-out drop-shadow-2xl
                '/>

                <label htmlFor="file_input" className="block mt-2 mb-2 text-sm font-medium text-white">
                    Upload Sample Images related your prompt
                </label>
                <input
                    id="file_input"
                    type="file"
                    className="h-7 w-1/2 block bg-black text-white text-sm border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-white"
                    multiple
                    accept="image/*"
                />


                <label for="Engine" className="block mt-2 mb-2 text-sm font-medium text-white">*Engine</label>
                <select id="price" className=" bg-slate-800 border w-50 border-gray-300 text-white text-sm rounded-lg focus:border-white block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  dark:focus:border-white">
                    <option selected>Select GPT Engine</option>
                    <option value="">Chat gpt-4 turbo</option>
                    <option value="">Chat gpt</option>
                    <option value="">Chat gpt-32k</option>
                    <option value="">Chat gpt-3.5 turbo</option>
                </select>

                <label for="tips" className="block mt-2 mb-2 text-sm font-medium text-white">Tips to use</label>
                <textarea
                    type="text"
                    id='tips'
                    placeholder=''

                    className='h-22 w-50  text-sm  bg-slate-800 border-2 rounded-lg  
                    border-white border-opacity-50 outline-none focus:border-white
                    focus:text-white transition duration-200 ease-in-out drop-shadow-2xl
                '/>
            </div>


            <button class=" flex items-center justify-center ml-40 p-0.5  mt-2 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-amber-500 to-rose-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-800 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Sell Prompt
                </span>
            </button>
        </div>
    )
}

export default SellPrompt
