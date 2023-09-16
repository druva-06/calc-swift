import React, { useState } from "react";
import './styles.css'

const App = () => {

    const [num1,setNum1] = useState("")
    const [num2,setNum2] = useState("")

    const[res,setRes] = useState("")

    function validation(event){
        if(!num1 || !num2){
            setRes("Empty")
            return
        }
        if(Number.isNaN(num1 - num2)){
            setRes("Error")
            return
        }
        arithmeticOperations(event.target.innerText)
    }

    function arithmeticOperations(type){
        if(type === '+'){
            setRes(Number(num1) + Number(num2))
        }
        else if(type === '-'){
            setRes(Number(num1) - Number(num2))
        }
        else if(type === '*'){
            setRes(Number(num1) * Number(num2))
        }
        else{
            setRes(Number(num1) / Number(num2))
        }
    }

    return (
        <div className="App">
            <div className="calculator">
                <h1>React Calculator</h1>
                <input type="text" placeholder="Num 1" onChange={(e) => setNum1(e.target.value)}/>
                <input type="text" placeholder="Num 2" onChange={(e) => setNum2(e.target.value)}/>
                <div className="operations">
                    <p onClick={validation}>+</p>
                    <p onClick={validation}>-</p>
                    <p onClick={validation}>*</p>
                    <p onClick={validation}>/</p>
                </div>
                <div className="output">
                    {res!=="" && ((res==="Empty" || res === "Error") ? (<h3 style={ {color:'red'} }>Error!</h3>):<h3 style={ {color:'blue'} }>Success!</h3>)}
                    {res !== ""  && res!=="Empty" && res!=="Error" && <p>Result :- {res}</p>}
                    {res === "Empty" && (num1 === "" ? <p>Num1 Cannot Be Empty!</p>:<p>Num2 Cannot Be Empty!</p>)}
                    {res === "Error" && <p>Input is Invalid!</p>}
                </div>
            </div>
        </div>
    )
}

export default App