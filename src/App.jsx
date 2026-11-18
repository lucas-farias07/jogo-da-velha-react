import './App.css';

function Square() {
  return (
    <button className='square'>
      X
    </button>
  )
}

function Board() {
  return (
    <>
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