import {useState} from 'react';
export default function Form2(){

    const [txt1, setTxt1] = useState('');
    const [type1, setType1] = useState('UTF-8');
    const [type2, setType2] = useState('Base64');
    const [txt2, setTxt2] = useState('');
    const [method, setMethod] = useState(true);//true->b2a, false-> a2b
    const [msg,setMsg] = useState('인코딩')
    function encodeUnicode(str){
        try{return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,(match, p1)=>
            String.fromCharCode('0x'+p1)
        ));}
        catch(e){ }
    }

    function decodeUnicode(str) {
        try{
        return decodeURIComponent(atob(str).split('').map(c =>
          '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        ).join(''));}
        catch(e){ }
      }
      

    return(<>
                <h2>Base64변환 - {msg+'('+type1+' to '+type2+')'}</h2>
                <div className="form2Text">
                    <textarea id="text1" value={txt1} placeholder={type1+'문자를 입력해주세요'}  onChange={e=>{
                        let txt1 = e.target.value;
                        let txt2 = '';
                        setTxt1(txt1);
                        if (method){ // b2a
                            txt2 = encodeUnicode(txt1)
                        }
                        else{ //a2b
                            if (!txt1) {
                                setTxt2('')
                                return;
                            }
                            txt2 = decodeUnicode(txt1)
                        }
                        setTxt2(txt2);
                    }}/>
                    <button className="switchBut" onClick={()=>{
                        setMethod(!method);
                        setTxt1(txt2);
                        setTxt2(txt1);
                        if(!method) {
                            setMsg('인코딩');
                            setType2('Base64');
                            setType1('UTF-8');
                        }
                        else{
                            setMsg('디코딩');
                            setType2('UTF-8');
                            setType1('Base64');
                        }
                    }}>⇄</button>
                    <textarea readOnly id="text2" value={txt2} placeholder={type2+'문자가 출력됩니다.'}/>
                </div>
                </>
    )
}