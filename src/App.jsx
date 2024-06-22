import axios from "axios";
import { useState } from "react";
import "./App.css"; // Assuming you have some CSS styling here

function App() {
  const [Question, setQuestion] = useState("");
  const [Answer, setAnswer] = useState("");

  async function generateSol() {
    // we are calling the API using Axios
    console.log("Loading...");
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyA1tDpLIcjavLWiwRhybDUd50D100FhkNw`,
        method: "POST",
        data: {
          contents: [{ parts: [{ text: Question }] }],
        },
      });
      setAnswer(response.data.candidates[0].content.parts[0].text);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  }

  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Harsh here Get Ready for New Negotiation chatbot
      </h1>
      <h1 className="text-3xl font-bold underline text-center">
        Ab batao kon kon ready hai iske liye??
      </h1>
      <textarea
        className="align-center px-52 py-11"
        name=""
        id=""
        cols="30"
        rows={10}
        value={Question}
        onChange={(e) => setQuestion(e.target.value)}
      ></textarea>

      <button className="my-0.5 px-52 py-12" onClick={generateSol}>
        Ask
      </button>
      <p>{Answer}</p>
    </>
  );
}

export default App;
