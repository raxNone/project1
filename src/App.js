// import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [msg,setMsg] = useState(0);
  const [bin,setBin] = useState(0);
  const [oct,setOct] = useState(0);
  const [hex,setHex] = useState(0);

  function Form1(e){
    let t_value = e.target.value;
    setMsg(t_value);
    setBin(Number(t_value).toString(2));
    setOct(Number(t_value).toString(8));
    setHex(Number(t_value).toString(16).toUpperCase());
    console.log(t_value);
  }
  
  return (
    <div>
      <p><input type='text' id='text' onChange={Form1} /></p>
      <div>
        <p>2진수 : {bin}</p>
        <p>8진수 : {oct}</p>
        <p>16진수 : {hex}</p>
      </div>
      
    </div>
  );
}



export default App;
