import { useCallback, useEffect, useState } from 'react'

import './App.css'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed]= useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [genarate_password, setGenarate_password] = useState(0)
  let [passward, setPassward] = useState("")
  
  const passwardgenerator =useCallback(()=>{

        let pass=""
        let str="abcdefghijklmnopqrstuvwxyzABCDEFDGIJKLMNOPQRSTUVWXYZ"

        if(charAllowed) 
          {str +="+-*/)(*&^%$#@!?><:}{][.,;'/_"}

        if(numberAllowed)
          { str +="1234567890"}

        for(let i=1; i<=length; i++){
        let char= Math.floor(Math.random()*str.length+1)

        pass +=str.charAt(char)
      }
  
      setPassward(pass)
  }
  

  ,[length,numberAllowed,charAllowed,])


  useEffect(()=>{

    passwardgenerator()
  },[length,numberAllowed,charAllowed,passwardgenerator,genarate_password])

  return (
    <>
      <div className="box">
        <div className="upermain">
        <input 
        className='input_text'
        type="text"
        placeholder='PASSWORD'
        value={passward}
        />
        
        <button onClick={()=>{setGenarate_password(genarate_password+1)}}> generate_password</button>
        </div>
        
        <div className="lowermain">
        <input className='range'
        type="range"
        max={17}
        min={0}
        value={length} 
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <br />
        <label 
        htmlFor="range" 
        className='text'>
        LENGTH: {length}
        </label>
        <br />
        <label 
        htmlFor="char" 
        className='text'>
        NUMERICVAL
        </label>
        <input 
        id='char' 
        type="checkbox"
        defaultChecked={numberAllowed}
        onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
        <br />
        <label 
        htmlFor="char" 
        className='text'>
        SPECIALCHAR
        </label>
        <input 
        id='char' 
        type="checkbox"
        defaultChecked={charAllowed}
        onChange={()=>{setCharAllowed((prev)=>!prev)}} />
        </div>
        
        
      </div>
    </>
  )
}

export default App
