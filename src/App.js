// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [msg,setMsg] = useState(0);
  const [bin,setBin] = useState(0);
  const [oct,setOct] = useState(0);
  const [hex,setHex] = useState(0);

  return (
    <div>
      
      <form onSubmit={event =>{
        event.preventDefault();
        setMsg(event.target.text.value);
        setBin(Number(msg).toString(2));
        setOct(Number(msg).toString(8));
        setHex(Number(msg).toString(16).toUpperCase());
        
      }}>
        <p><input type='text' id='text'/></p>
        <p><input type='submit' value='제출'/></p>
        
      </form>
      
      <p>2진수 : {bin}</p>
      <p>8진수 : {oct}</p>
      <p>16진수 : {hex}</p>
    </div>
  );
}

export default App;
