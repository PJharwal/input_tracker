import React, {useState} from 'react';
import './App.css'


const InputTracker = () => {
  const[input, setInput] = useState('');

  return(
    <div>
      <input
      
      type= "text"
      value= {input}
      onChange={(e) => setInput(e.target.value)}
      placeholder= "Type Something to print"
      
      
      />
      
       <p> Current Input : {input} </p>

    </div>

  );

};



export default InputTracker


