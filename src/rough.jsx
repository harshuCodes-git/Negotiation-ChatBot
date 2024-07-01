import axios from "axios";
import { useState } from "react";
import "./index.css"; // Ensure this file has the Tailwind CSS imports
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

function App() {
  // const [Question, setQuestion] = useState("");
  // const [Answer, setAnswer] = useState("");
  // const [Loading, setLoading] = useState(false);
  // const [Error, setError] = useState("");

  // async function generateSol() {
  //   setLoading(true);
  //   setError("");
  //   setAnswer("");
  //   try {
  //     const response = await axios({
  //       url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=API_KEY`,

  //       method: "POST",
  //       data: {
  //         contents: [{ parts: [{ text: {Question} }] }],
  //       },
  //     });
  //     setAnswer(response.data.candidates[0].content.parts[0].text);
  //   } catch (error) {
  //     setError("Error fetching data. Please try again.");
  //     console.error("Error fetching data: ", error);
  //   }
  //   setLoading(false);
  // }

  return (
    <>
      <Navbar />
      <HeroSection />
      {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-3xl font-bold underline text-center mt-8">
          Harsh here, Get Ready for New Negotiation Chatbot
        </h1>
        <h1 className="text-3xl font-bold underline text-center mt-4 mb-8">
          Who is ready for this?
        </h1>
        <textarea
          className="w-3/4 p-4 border border-gray-300 rounded-lg shadow-sm"
          cols="30"
          rows="10"
          value={Question}
          onChange={(e) => setQuestion(e.target.value)}
        ></textarea>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          onClick={generateSol}
        >
          Ask
        </button>
        {Loading && <p className="mt-4">Loading...</p>}
        {Error && <p className="mt-4 text-red-500">{Error}</p>}
        {Answer && (
          <p className="mt-4 p-4 bg-white border border-gray-300 rounded-lg shadow-sm w-3/4">
            {Answer}
          </p>
        )}
      </div> */}
    </>
  );
}

export default App;
