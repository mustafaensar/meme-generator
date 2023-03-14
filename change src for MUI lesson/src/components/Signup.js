import React from "react";
import "../styles/Signup.css"

function Signup(){

  const [email,setEmail] = React.useState("");
  const [password,setPassword] = React.useState("");
  const [passwordConfirm,setPasswordConfirm] = React.useState("");
  const [joinNewsLetter,setJoinNewsLetter] = React.useState("");

  function handleEmail(event){
    setEmail(event.target.value);
  }

  function handlePassword(event){
    setPassword(event.target.value);
  }

  function handlePasswordConfirm(event){
    setPasswordConfirm(event.target.value);
  }

  function handleJoinNewsLetter(event){
    setJoinNewsLetter(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    if(password === passwordConfirm){
      alert("Successfully registered")
    }
    else{
      alert("Passwords do not match")
    }
  }

  return(
    <>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email adress"
            className="form--input"
            value={email}
            onChange={handleEmail}
            name="email"
          />
          <input
            type="password"
            placeholder="Password"
            className="form--input"
            value={password}
            onChange={handlePassword}
            name="password"
          />
          <input
            type="password"
            placeholder="Password Confirm"
            className="form--input"
            value={passwordConfirm}
            onChange={handlePasswordConfirm}
            name="passwordConfirm"
          />
          <input
            type="checkbox"
            name="newsletter"
            checked={joinNewsLetter}
            onChange={handleJoinNewsLetter}
          />
          <label>I want to join newsletter</label>
          
          <button className="form--submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Signup;