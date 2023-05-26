import React from "react";

export default function App()  {
  return (
    <div>
      <NumberDisplay num = {5} />
      <div>"hi"</div>
    </div>
  );
}

function NumberDisplay(props){
    return (
      <div>
        <div>{props.num}</div>
        <div>{props.num}</div>
      </div>
    );
}
