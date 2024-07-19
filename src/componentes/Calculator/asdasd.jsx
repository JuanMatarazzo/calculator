import React from 'react'

function asdasd() {
  return (
     <div className={style.container}>
    
        <input value={result} disabled/>
    
    <div>
      <button onClick={clear}>AC</button>
      <button onClick={deleteEl}>DE</button>


      <button id="." onClick={handleClick}>.</button>
      <button id="/" onClick={handleClick}>/</button>

      <button id="7" onClick={handleClick}>7</button>
      <button id="8" onClick={handleClick}>8</button>
      <button id="9" onClick={handleClick}>9</button>


      <button id="*" onClick={handleClick}>*</button>


      <button id="4" onClick={handleClick}>4</button>
      <button id="5" onClick={handleClick}>5</button>
      <button id="6" onClick={handleClick}>6</button>


      <button id="-" onClick={handleClick}>-</button>

      <button id="3" onClick={handleClick}>3</button>
      <button id="2" onClick={handleClick}>2</button>
      <button id="1" onClick={handleClick}>1</button>

      <button id="+" onClick={handleClick}>+</button>


      <button id="00" onClick={handleClick}>00</button>
      <button id="0" onClick={handleClick}>0</button>

      <button id="=" onClick={calculate}>=</button>


    </div>
  </div>
  )
}

export default asdasd