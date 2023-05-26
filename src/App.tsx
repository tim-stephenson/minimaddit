
export default function App()  {
  return (
    <div>
      <NumberDisplay num={5} />
      <div>"hi"</div>
      <NumberDisplay num={5} />
    </div>
  );
}

function NumberDisplay({num = 0} : {num ?: Number}){
    return (
        <p>{`${num}`}</p>
    );
}
