import React from "react";

const Hello = () => {
  // return(
  //     <div className = 'dummyClass'>
  //         <h1>hi jefferry!!</h1>
  //     </div>
  // )
  return React.createElement(
    "div",
    {id : 'hello', className: 'dummyClass'},
    React.createElement("h1", null, "hi jefferry!!")
  );
};

export default Hello;
