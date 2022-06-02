import React, { useEffect, useRef, useState } from 'react'
import Button from '../Button/Button'
import "./Calculator.css"

function Calculator() {
  const [input,setInput] = useState("");
  const [result, setResult] = useState(0);
  const inputRef = useRef(null);
  let float = /.00/;

  const buttons = [1,2,3,"+",4,5,6, "-",7,8,9, "*",".", 0,"00", "/", "(", ")"];

  const inputChangeHandler = (event) => {
      setInput(event.target.value)
  }

  const buttonHandler = (value) => {
      setInput(input + `${value}`);
  }

  const getResult = () => {
     setResult(eval(input)); 
  }

  const clearInput = () => { 
    setResult("")
    setInput("");
  }
  
  const undoInput = () => {
    if(input != result){
      if(input.length > 0 && input != result){
        setInput(input.slice(0, -1));
      }else{
        setInput(input.slice(0, -1));
        setResult(input.slice(0, -1))
      }
    } else{
      let refe = inputRef.current.value.slice(0, -1);
      setInput(refe);
      setResult(refe)
    }
  }

 useEffect( () => {
  setInput(result)
 } , [result]);
 
 useEffect( () => {
   setInput("")
 }, [])

  return (
    <center>
      <h1> Calculator App</h1>
      <input type="text" value={input} ref = {inputRef} onChange = {inputChangeHandler} />
      {/* <p> Result = {result ? result : 0} </p> */}
      <div className='buttonsMap' >
      {buttons.map((item,index) => {
        return <Button handler = {() => buttonHandler(item)} key = {index} text = {item}  />
      } )}
      <Button class = "equalSym" handler = {getResult} text = "=" />
      
      </div>
      <div className='textButtons' >
      <Button class = "clearBtn" handler = {clearInput} text = "Clear" />
      <Button class=  "undoBtn" handler = {undoInput} text = "Undo" />
      </div>
      
     
    </center>
  )
}

export default Calculator