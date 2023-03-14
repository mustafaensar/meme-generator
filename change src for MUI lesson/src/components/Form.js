import React from "react";

function Form(){

  const [firstName, setFirstName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [isComputer, setIsComputer] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [favBrand, setFavBrand] = React.useState("");

  function handleFirstName(event){
    setFirstName(event.target.value)  
  }

  function handleEmail(event){
    setEmail(event.target.value)  
  }

  function handleCheckBox(event){
    setIsComputer(event.target.checked)
  }

  function handleRadioButton(event){
    setStatus(event.target.value)
  }

  function handleSelect(event){
    setFavBrand(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault();
    console.log(event)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={handleFirstName}
      />
      <input
        type="text"
        placeholder="example@email.com"
        value={email}
        onChange={handleEmail}
      />
      <input
        type="checkbox"
        checked={isComputer}
        onChange={handleCheckBox}
      />
      <input
        type="radio"
        value="fulltime"
        name="fulltime"
        checked={status === "fulltime"}
        onChange={handleRadioButton}
      />
      <label>Full Time</label>
      <input
        type="radio"
        value="parttime"
        name="parttime"
        checked={status === "parttime"}
        onChange={handleRadioButton}
      />
      <label>Part Time</label>
      <input
        type="radio"
        value="freelance"
        name="freelance"
        checked={status === "freelance"}
        onChange={handleRadioButton}
      />
      <label>Freelance</label>

      <label>What is your favourite brand?</label>
      <select
        value={favBrand}
        onChange={handleSelect}
      >
        <option value="bmw">BMW</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        <option value="honda">Honda</option>
        <option value="tofas">Tofas</option>
        <option value="volvo">Volvo</option>
      </select>

      <button>Submit</button>
    </form>
  )
}

export default Form;