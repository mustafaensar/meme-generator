import React from "react";

function Ternary(){
  
  const [messages, setMessages] = React.useState(["first message"]);

  function body(){
    return(
      <>
        {
          messages.length === 0 ?
          <h1>No Messages</h1> :
          <h1>You have {messages.length} unread {messages.length >1 ? "messages" : "message" }</h1>
        }
    </>  
    )
  }

  return(
    <>
      {
        messages.length === 0 ?
        <h1>No Messages</h1> :
        <h1>There are unread messages</h1>
      }

      {body()}
    </>
  )
}

export default Ternary;