import React from "react";

/**
 * It is also called "side effect" 
 * */ 
function UseEffect(){
  const [count, setCount] = React.useState(0);

  // Hooks --> UseState, UseEffect...
  // Class Component --> Lifecycle methods

  console.log("component renedered")

  React.useEffect(() => {
    console.log("use effect executed");
  }, [count])

  return(
    <>
      <div>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
    </>
  )
}

export default UseEffect;