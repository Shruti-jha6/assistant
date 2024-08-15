import './App.css';
import axios from 'axios';
// import {useStates } from 'react'

function App() {
  // const [ques, setQues]
  async function generateans() {
    console.log('Generating');
    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDML4qGZ0Wi2rc7n_s8bcKAWnmgjJk5uew",
        method: "POST",
        data: {
          "contents": [{"parts": [{"text": "how many sections are there in the company law 2013"}]}],
        },
      });
      const generatedText = response.data.candidates[0].content.parts[0].text;
    console.log(generatedText);
    } catch (error) {
      console.error('Error generating response:', error);
    }
  }

  return (
    <div className="main">
      <h1>Kya hukum mere aaka!</h1>
      {/* <textarea value={} cols> */}

      {/* </textarea> */}

      <button onClick={generateans}>Generate</button>
    </div>
  );
}

export default App;
