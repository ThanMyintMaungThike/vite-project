import React from 'react'
import Child1 from './Child1'

const Parents = () => {
    const loginUser = "Hello Admin"
  return (
    <div>
      <h2>Parent</h2>
      <p>{loginUser}</p>
      <Child1 user={loginUser}/>
    </div>
  )
}

export default Parents
