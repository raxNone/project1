import {useState} from 'react';
export default function Form2(){

    const [txt1, setTxt1] = useState('');
    const [txt2, setTxt2] = useState('');
    const [method, setMethod] = useState(true);//true->t2a, false-> a2t
    const [msg,setMsg] = useState('텍스트를 아스키로')
    return(<>
                <h2>아스키변환 - {msg}</h2>
                <div className="form2Text">
                    <textarea id="text1" value={txt1} placeholder={msg.slice(0,3)+'를 입력하세요.'} onChange={e=>{
                        let txt1 = e.target.value;
                        let txt2 = '';
                        setTxt1(txt1);
                        if (method){ // t2a
                            txt1.split('').forEach(txt => {
                                txt2 += txt.charCodeAt()+' '
                            });
                        }
                        else{ //a2t
                            if (!txt1) {
                                setTxt2('')
                                return;
                            }
                            txt1.split(' ').forEach(txt=>{
                                txt2+=String.fromCharCode(txt)
                            });
                            
                        }
                        setTxt2(txt2);
                    }}/>
                    <button className="switchBut" onClick={()=>{
                        setMethod(!method);
                        setTxt1(txt2);
                        setTxt2(txt1);
                        if(!method) setMsg('텍스트를 아스키로');
                        else setMsg('아스키를 텍스트로');
                    }}>⇄</button>
                    <textarea readOnly id="text2" placeholder={msg.slice(5,8)+'가 출력됩니다.'}value={txt2}/>
                </div>
                </>
    )
}