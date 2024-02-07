import React from 'react'
import Child3 from './Child3'
const Child2 = ({child}) => {
  return (
    <div>
      Child2 {child}
      <Child3 baby={child} />
    </div>
  )
}

export default Child2
