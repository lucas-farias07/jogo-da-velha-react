import './App.css';

function Square({ value }) {
  return (
    <button className="square">
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