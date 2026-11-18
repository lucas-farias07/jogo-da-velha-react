import { useState }'./App.css';

function Square({ value }) {
  const [value, setValue] = useState(null);
  function handleClick() {
    setValue('X');
  }

return (
  <button
    className="square"
    onClick={handleClick}
  >
    {value}
  </button>
  );
}

function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="X" />
        <Square value="O" />
        <Square value="X" />
      </div>

      <div className='board-now'>
        <Square />
        <Square />
        <Square />
      </div>

      <div className='board-now'>
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

export default function App() {
  return <Board />;
}