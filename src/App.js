import './App.css';
import {useState} from 'react';

function App() {
  const [msg,setMsg] = useState(0);
  const [bin,setBin] = useState(0);
  const [oct,setOct] = useState(0);
  const [hex,setHex] = useState(0);
  const [num, setNum] = useState(10);
  const [custom, setCustom] = useState();

  let opt = [];
  for(let i=2; i<37; i++){
    opt.push(<option key={i}>{i}</option>)
  }


  function Form1(e){  

    let t_value = Number(e.target.value);
    setMsg(t_value);
    setBin(t_value.toString(2));
    setOct(t_value.toString(8));
    setHex(t_value.toString(16).toUpperCase());
    setCustom(t_value.toString(num).toUpperCase());
    
  }
  


  return (
    <div id='wrap'>
    <div className='container'>
      <div className='body' >
        <h1>진법변환</h1>

        <p><input type='number' id='text'autoComplete='off' placeholder='숫자를 입력하세요' style={{height:"25px", width :"500px", fontSize:"18px"}} onChange={Form1}/></p>
        
        <p>2진수 : {bin}</p>
        <p>8진수 : {oct}</p>
        <p>16진수 : {hex}</p>
        <select style={{height:"25px", width :"50px", fontSize:"18px"}} defaultValue="10" onChange={e=>{
          let n = Number(e.target.value);
          setNum(n);
          setCustom(msg.toString(n).toUpperCase())}}>{opt}</select> 진수 : {custom}
        
      </div>
    </div>
  </div>
  );
}

export default App;
