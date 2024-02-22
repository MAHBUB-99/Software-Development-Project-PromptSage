import React, { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { FaHeart, FaCopy } from 'react-icons/fa'; // Import FaCopy icon
import { useParams, useNavigate } from "react-router-dom";

function BoughtPromptDetails() {
  const { isLoggedIn, user } = useAuth();
  const [prompt, setPrompt] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // Updated state for like count
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPromptDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/prompts/${id}`
        );
        const { prompt } = response.data;
        setPrompt(prompt);
        setLikeCount(prompt.likesCount); // Update like count from the backend response
      } catch (error) {
        console.error("Error fetching prompt details:", error);
      }
    };
    fetchPromptDetails();
  }, [id]);

  const handleLike = async () => {
    if (!isLoggedIn) {
      // Handle not logged in
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:4000/api/v1/prompts/like/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if (response.status === 200) {
        setIsLiked(true);
        setLikeCount(prevCount => prevCount + 1);
      }
    } catch (error) {
      console.error("Error liking prompt:", error);
    }
  };

  const navigateBuyPrompt = () => {
    // Navigate to buy prompt page
    navigate(`/buy-prompt/${id}`);
  };

  const handleAddToCart = () => {
    // navigate to add to cart page
    // navigate(`/cart/add/${id}`);
    navigate(`/cart/`);
  };

  const navigateToEngineerProfile = (id) => {
    // Navigate to engineer profile with id
  };

  const copyPromptText = () => {
    navigator.clipboard.writeText(prompt.prompt); // Copy prompt text to clipboard
  };

  if (!prompt) {
    return (
      <div className="bg-slate-900 h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <p className="text-white">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen">
      <Navbar />
      <div className="flex flex-col lg:flex-row items-start lg:items-center lg:gap-8 mt-5 px-8 lg:ml-20 xl:ml-32">
        {/* Left Side - Prompt Details */}
        <div className="lg:w-9/12">
          {/* Cover Image */}
          <div className="relative mb-6">
            <img
              src={prompt.cover_image.url}
              alt={prompt.title}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              style={{ filter: "drop-shadow(0px 10px 100px rgba(0, 0, 0, 0.5))" }}
            />
            <div className="absolute bottom-0 left-0 w-full p-2 bg-black bg-opacity-30 rounded-b-lg">
              <h2 className="text-white text-lg font-semibold mb-1">{prompt.title}</h2>
              {/* Like Button */}
              <div className="flex items-center justify-between text-gray-300">
                <p>Likes: {prompt.likesCount}</p>
                <button
                  onClick={handleLike}
                  className={`bg-gradient-to-r from-red-500 to-red-700 text-white px-6 py-3 rounded-lg hover:from-red-700 transition-colors duration-300 flex items-center ${isLiked ? 'animate-pulse' : ''}`}
                >
                  <FaHeart className={`mr-1 ${isLiked ? 'text-red-500' : ''}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-full bg-slate-900 p-2 rounded-lg shadow-lg mb-4">
            <p className="text-white mb-4">{prompt.description}</p>
          </div>

          {/* Price and Buttons */}
          <div className="lg:w-full bg-slate-900 p-2 rounded-lg shadow-lg mb-4">
            <div className="flex justify-between items-center">
              <p className="text-white mb-2">Price: {prompt.price}$ (Paid)</p>
            </div>
          </div>

          {/* Prompt Text Box and Copy Button */}
          <div className="max-w-full bg-slate-900 p-2 rounded-lg shadow-lg mb-4">
            <h3 className="text-lg font-semibold text-white mb-2">Prompt Text</h3>
            <textarea
              className="w-full h-20 bg-gray-800 text-white p-2 rounded-lg mb-2"
              value={prompt.prompt}
              readOnly
            />
            <button
              onClick={copyPromptText}
              className="flex items-center justify-center p-0.5 mt-2 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-amber-500 to-rose-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              <span className="relative px-10 py-2.5 transition-all ease-in duration-75 bg-slate-800 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <FaCopy className="mr-2" /> Copy Prompt
              </span>
            </button>
          </div>

          {/* Tips */}
          <div className="max-w-full bg-slate-900 p-2 rounded-lg shadow-lg mb-6">
            <h3 className="text-lg font-semibold text-white mb-4">Tips:</h3>
            <ul className="text-gray-300">
              {prompt.tipsToUse}
            </ul>
          </div>
        </div>

        <div className="lg:w-3/12 mb-64 mr-24 lg:ml-0">
          <h2 className="text-white text-lg font-semibold mb-2">  Engineer : Arif Faisal</h2>
          {/* Seller Engineer Image */}
          <div className="relative mb-6">
            <div
              style={{
                backgroundImage: 'url(https://img.freepik.com/free-photo/white-notebook-black-data-firewall_1150-1733.jpg?w=900&t=st=1706515656~exp=1706516256~hmac=cf8699dfe1843ed04a53830e9d1b6b11d37451a03bf65a21b476391beeb92a9d)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              className="w-full h-64 object-cover rounded-lg shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 relative"
              onClick={() => navigateToEngineerProfile(engineer.id)}
            >
              <div className="absolute p-6 bottom-0 left-0 w-full  bg-black bg-opacity-50 rounded-b-lg p-2">
                <h2 className="text-white text-lg font-semibold mb-2">Arif Faisal</h2>
                <p className="text-gray-300">DALL-E</p>

                {/* Add hover effect here */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}

export default BoughtPromptDetails;
