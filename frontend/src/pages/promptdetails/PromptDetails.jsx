import { useState, useEffect } from "react";
import Navbar from "../../components/navbar/Navbar";
import axios from "axios";
import { useAuth } from "../../AuthContext";
import { Link, useParams, useNavigate } from "react-router-dom";

function PromptDetails() {
  const { isLoggedIn, user } = useAuth();
  const [prompt, setPrompt] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPromptDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/v1/prompts/${id}`
        );
        setPrompt(response.data.prompt);
      } catch (error) {
        console.error("Error fetching prompt details:", error);
      }
    };
    fetchPromptDetails();
  }, [id, isLoggedIn]);

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
  // console.log(prompt.uploadedBy,"----" , user._id, isLoggedIn)

  const navigateEditPrompt = (promptid) => {
    navigate(`/edit-prompt/${promptid}`);
  };
  const navigateBuyPrompt = (promptid) => {
    navigate(`/buy-prompt/${promptid}`);
  };

  return (
    <div className="bg-slate-900 h-screen">
      <Navbar />
      <div className="flex flex-col items-center mt-5">
        {/* Detailed Prompt Information */}
        <div className="max-w-3xl bg-slate-800 p-6 rounded-lg shadow-lg">
          <img
            src={prompt.cover_image.url}
            alt={prompt.title}
            className="w-full h-40 object-cover mb-4 rounded-lg"
          />
          <h1 className="text-3xl font-bold text-white mb-2">{prompt.title}</h1>
          <p className="text-gray-300 text-sm mb-4">{prompt.engine}</p>
          <p className="text-white">{prompt.description}</p>
          {/* Add other prompt details as needed */}
        </div>

        {isLoggedIn ? (
          prompt.uploadedBy !== user._id ? (
            <div onClick={()=>navigateBuyPrompt(prompt._id)}>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                Buy Prompt
              </button>
            </div>
          ) : (
            // <div onClick={() => navigateEditPrompt(prompt._id)}>
            //   <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
            //     Edit Prompt
            //   </button>
            // </div>
            <></>
          )
        ) : (
          <Link to="/signin" className="m-6 text-white">
            <button className=" text-white ">
              <u>Login</u>
            </button>{" "}
            to Buy/Edit Prompt
          </Link>
        )}
      </div>
    </div>
  );
}

export default PromptDetails;