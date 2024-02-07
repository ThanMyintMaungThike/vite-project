import React, {useState} from 'react'

const Login = () => {
    const [username, SetUserName] = useState("");
    const [password, SetPassword] = useState("");

    const passwordHandler =  (e) => {
        SetPassword(e.target.value)
        console.log("Typed password "+ e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(`username: ${username} Password: ${password}`)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <h2>Login Form</h2>

            <label>User Name</label>
            <input type="text" name="username" placeholder='username' 
            value={username} onChange={(e)=>{
            console.log("Typed value "+e.target.value)
            SetUserName(e.target.value)
            }} /> <br />

            <label>Password</label>
            <input type="password" placeholder='password' 
            value={password} onChange={passwordHandler} /> <br />
            <button type="submit" >Submit</button>
        </form>
        <p>Login user: {username}</p>
    </div>
  )
}

export default Login
