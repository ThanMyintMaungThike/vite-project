import React, { useState } from 'react'
import './Form.css'


const Form = () => {
    const [inputText, setInputText] = useState("");
    const [todoItems, setTodoItems] = useState([]);

    const inputHandler = (e) => {
        setInputText(e.target.value)
    }
    const addHandler = ()=> {
        console.log("Added value " + inputText)

        if(inputText !== "") {
            setTodoItems([...todoItems, inputText]);
            setInputText("")
            document.querySelector("#text").focus();
        }
    }
    const editHandler = (id)=> {
        console.log("Edit item " + id)
        const editItem = todoItems.filter((item, index) => index === id)
        const newText= window.prompt('Edit your text ', editItem)
        if(newText) {
            console.log("New Text " + newText)
            const updatedTodoItems = todoItems.map((item, index) =>
            index === id ? [ newText] : item)
            setTodoItems(updatedTodoItems)
        }
    }
    const deleteHandler = (id) => {
        console.log("deleteitem "+ id);
        const nonDelItem = todoItems.filter((item, index) => index !== id);
        setTodoItems(nonDelItem)
    }
  return (
    <div>
      <h1>TODO LIST</h1>
      <input className='input' id="text" type="text" placeholder='add item...' 
      value={inputText} onChange={inputHandler} /> <br/>

      <button className='btn1' type='button' onClick={addHandler}>ADD</button>

      <div>
        <div className='wrap'>
            {
                todoItems.map((item, index) =>
                <div className='task' key={index} >
                    <p>{item}</p>
                    <div>
                        <button type="button" onClick={()=>deleteHandler(index)}>Delete</button>
                        <button className='btn2' type="button"
                        onClick={()=>editHandler(index)}>Edit</button>
                    </div>
                </div>
                )
            }

        </div> 

      </div>
    </div>
  )
}

export default Form
