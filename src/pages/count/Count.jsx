import React, { useContext, useEffect, useState } from 'react'

import { userContext } from '../../store/userContext'

const Count = () => {
  const contextValue = useContext(userContext)
    const [myCount, setMyCount] = useState(0)
    const [isSubmit, setIsSubmited] = useState(false)

    // const [selectedCategory, setSelectedCategory] 
    useEffect(()=>{
        console.log("Render in useEffect")
        setMyCount(myCount+1)
    }, [isSubmit])
    // no dependency render forever 
    // [] dependency render first time 
    // [state] dependency render every state changed 

    // category = ["all", "gradeA", "gradeB"] 
    const submitHandler = ()=>{
        setIsSubmited(!isSubmit)
    }
  return (
    <div> My Count {myCount}
      <button type='button' onClick={submitHandler}>Submit</button>
      <h2>Context value: {contextValue}</h2>
    </div>
  )
}

export default Count
