import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
  const [text, settext] = useState("");

  const wordCount = () =>{
    if(text.length > 0){
      return text.split(" ").length;
    }else{
      return 0
    }
  }

  const letterCount = () =>{
    return text.length
  }

  return (
    <div className="App">
      <div className="counter">
          <textarea onChange={(e)=>{
            settext(e.target.value)
          }} rows="10" cols="40" placeholder="Start writting your paragraph" value={text}/>
          <p>Total Words : {wordCount()}</p>
          <p>Total Letters :{letterCount()}</p>
      </div>
    </div>
  );
}

export default App;
