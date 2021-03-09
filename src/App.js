import './App.css';
import React, {useState} from 'react';



function App() {
  const [content, setContent] = useState("")

  const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(text)
      setContent(text)
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <div>
     
     Hello world
     <div></div>
     <input type="file" onChange={(e) => showFile(e)} />
     <br></br>
     <button onClick={() => console.log("button clicked")}>Submit</button>

     <div>{content}</div>
    </div>
  );
}

export default App;
