import './App.css';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [ques, setQues] = useState("");
  const [ans, setAns] = useState("");

  async function generateans() {
    setAns('Generating...');
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.REACT_APP_API_KEY}`,
        method: "POST",
        data: {
          "contents": [{ "parts": [{ "text": ques }] }],
        },
      });
      const generatedText = response.data.candidates[0].content.parts[0].text;
      setAns(generatedText);
    } catch (error) {
      console.error('Error generating response:', error);
      setAns('Error generating response');
    }
  }

  return (
    <div className="main">
      <h1>Kya hukum mere aaka!</h1>
      <textarea value={ques} onChange={(e) => setQues(e.target.value)} cols="40" rows="15"></textarea>
      <button onClick={generateans}>Generate</button>
      <p>{ans}</p>
    </div>
  );
}

export default App;
