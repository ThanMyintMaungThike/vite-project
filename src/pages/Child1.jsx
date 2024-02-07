import React from 'react'
import Child2 from './Child2'
const Child1 = ({user}) => {
  return (
    <div>
      Child1 {user}
      <Child2 child={user} />
    </div>
  )
}

export default Child1
