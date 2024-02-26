import {React, useState} from 'react';

/**진법 변환 페이지 */
export default function Form1(){

    const [msg,setMsg] = useState('10진수 숫자를 입력하세요');
    const [bin,setBin] = useState(0);
    const [oct,setOct] = useState(0);
    const [hex,setHex] = useState(0);
    const [custom, setCustom] = useState(0);
    const [num1, setNum1] = useState(10); //입력진법
    const [num2, setNum2] = useState(10); //출력진법
    
  
    let opt = [];
    for(let i=2; i<37; i++){
      opt.push(<option key={i}>{i}</option>)
    }
  
    function change(e){  
  
      let t_value = parseInt(e.target.value,num1);
      setBin(t_value.toString(2));
      setOct(t_value.toString(8));
      setHex(t_value.toString(16).toUpperCase());
      setCustom(t_value.toString(num2).toUpperCase());
      
    }
  
    function selChange(e){
      let n1 = Number(e);
      setMsg(n1.toString()+'진수 숫자를 입력하세요');  
      let n = document.getElementById('text').value;
      let t_value = parseInt(n,n1);
      setNum1(n1)
      setBin(t_value.toString(2));
      setOct(t_value.toString(8));
      setHex(t_value.toString(16).toUpperCase());
      setCustom(t_value.toString(num2).toUpperCase());
    }
  
    
    return (
      <div className='container'>
        <div className='body' >
          <h2>진법변환 - {num1} to {num2}</h2>
              <div className='input'>
              <input type='text' id='text' autoComplete='off' placeholder={msg} style={{height:"50px", width :"500px", fontSize:"25px"}} onChange={change}/>
              <ul id='selectionList' onClick={e=>{document.getElementById('selection').value = e.target.id ;selChange(e.target.id);}}>
                <li><button id='2'>2진수</button></li>
                <li><button id='8'>8진수</button></li>
                <li><button id='10'>10진수</button></li>
                <li><button id='16'>16진수</button></li>
              </ul>
              <select id='selection' style={{height:"50px", width :"78px", fontSize:"25px", margin:"1px 20px"}} defaultValue="10" onChange={e=>{selChange(e.target.value);}}>
                {opt}
              </select>
          </div>
          <div className='output'>
            <p>2진수 : {bin}</p>
            <p>8진수 : {oct}</p>
            <p>16진수 : {hex}</p>
            <select style={{height:"50px", width :"70px", fontSize:"25px"}} defaultValue="10" onChange={e=>{
              let n2 = Number(e.target.value);
              setNum2(n2);
              let n = document.getElementById('text').value;
              let t_value = parseInt(n,num1);
              setCustom(t_value.toString(n2).toUpperCase())}}>{opt}
            </select> 진수 : {custom}
          </div>
        </div>
      </div>
    )
  }
  