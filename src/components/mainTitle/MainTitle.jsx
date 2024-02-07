import React from 'react'

// export const MainTitle = ({title}) => { 
export const MainTitle = (props) => { 

  const title = props.title;
  return (
    <div>
      {/* MainTitle */}
      {/* <h2>{props.title}</h2> */}
      <h1>{title}</h1>
    </div>
  )
}
export const SecondTitle = (props) => { 

  const title = props.title;
  return (
    <div>
      {/* MainTitle */}
      {/* <h2>{props.title}</h2> */}
      <h1>{title}</h1>
    </div>
  )
}

// export default MainTitle
