import gitIcon from './gitIcon.png';
import './App.css';
import {useState} from 'react';

function App() {
  

  return (
  <div id='wrap'>
    <div className='head'>
      <h1 className='title'>변환 사이트</h1>
      <div className='about'>
        <a href='https://github.com/raxNone/project1'><img src={gitIcon} style={{height:"60px", width: "60px"}}/></a>
      </div>
    </div>
    <hr/>
    
      
      <div className='bar'>
          <ul className='siteList'>
            <li id='form1'>
              <a className='navBar' href='/form1'>진법변환</a>
            </li>
            <li id='form2'>
              <a className='navBar' href='/form2'>아스키변환</a>
            </li>
            <li id='form3'>
              <a className='navBar' href='/form3'>유니코드변환</a>
            </li>
          </ul>
          <div>
            만들기
          </div>
      </div>
    <hr/>
      <Form1/>
    
  </div>
  );
}

/**진법 변환 페이지 */
function Form1(){

  const [msg,setMsg] = useState(0);
  const [bin,setBin] = useState(0);
  const [oct,setOct] = useState(0);
  const [hex,setHex] = useState(0);
  const [num, setNum] = useState(10);
  const [custom, setCustom] = useState(0);

  let opt = [];
  for(let i=2; i<37; i++){
    opt.push(<option key={i}>{i}</option>)
  }

  function change(e){  

    let t_value = Number(e.target.value);
    setMsg(t_value);
    setBin(t_value.toString(2));
    setOct(t_value.toString(8));
    setHex(t_value.toString(16).toUpperCase());
    setCustom(t_value.toString(num).toUpperCase());
    
  }
  
  return (
    <div className='container'>
      <div className='body' >
        <h1>진법변환</h1>

        <p><input type='number' id='text'autoComplete='off' placeholder='숫자를 입력하세요' style={{height:"25px", width :"500px", fontSize:"18px"}} onChange={change}/></p>
        
        <p>2진수 : {bin}</p>
        <p>8진수 : {oct}</p>
        <p>16진수 : {hex}</p>
        <select style={{height:"25px", width :"50px", fontSize:"18px"}} defaultValue="10" onChange={e=>{
          let n = Number(e.target.value);
          setNum(n);
          setCustom(msg.toString(n).toUpperCase())}}>{opt}</select> 진수 : {custom}
        
      </div>
    </div>
  )
}


export default App;
