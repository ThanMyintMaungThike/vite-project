import React, { useState } from 'react'
import './Button.css'

const MyButton = ({btnClassName,btnLabel,onbtnClick})=> {
    return(
        <button className={`btn ${btnClassName}`} onClick={onbtnClick} >{btnLabel}</button>
    )
}
const Button = () => {
    const [count,setCount] = useState(0);

    // const increaseHandler = ()=>setCount(pre=>pre+1)
    const decreaseHandler = ()=>{
      // document.body.style.backgroundColor = 'yellow';
      setCount(count-1);
      if(count <=  0) {
        setCount(0)
      }
    }

  return (
    <div>
      <p>My Count {count}</p>
      {/* <button className="btn increase">Increment</button>
      <button className="btn decrease">Decrement</button> */}
      
      {/* <MyButton btnClassName="increase" btnLabel="Increament" onbtnClick={increaseHandler}/> */}
      <MyButton btnClassName="increase" btnLabel="Increament" onbtnClick={()=>setCount(count+1)}/>
      <MyButton btnClassName="decrease" btnLabel="Decreament" onbtnClick={decreaseHandler} />
    </div>
  )
}

export default Button
