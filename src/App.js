import gitIcon from './gitIcon.png';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import {useState} from 'react';

import Form1 from './Form1'
import './Form1.css'

import Form2 from './Form2'
import './Form2.css'

function App() {
  

  return (
  <div id='wrap'>
    <div className='head'>
      <h1 className='title'><a href='/' style={{color:'black'}}>변환 사이트</a></h1>
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
              <a className='navBar' href='/form3'>Base64변환</a>
            </li>
          </ul>
          <div>
            만들기  
          </div>
      </div>
    <hr/>
    <div className='container'>
      <div className='body' >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Form1/>}/>
            <Route path='/form1/' element={<Form1/>}/>
            <Route path='/form2/' element={<Form2/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>

  </div>
  );
}


export default App;
