import React, {useState} from 'react' 

const SwitchTheme = () => {

const [isDark, setIsDark ] = useState(false)

    const changeThemeHandler = ()=> {
        if(isDark === true)
        {
            console.log("Theme is dark " + isDark);
            document.body.style.backgroundColor = "black";
            setIsDark(false);
        }else {
            console.log("Theme is white "+ isDark)
            document.body.style.background = "white"
            setIsDark(true);
        }
    }
  return (
    <>
      <button onClick={changeThemeHandler}>
        Change {
          isDark ? `Dark` : `White`
        }
      </button>
        {
          isDark && <p>Theme is white.</p>
        }

    </>
  )
}

export default SwitchTheme

// isTrue ? true : false
// isTrue && true 