import React, {useState} from 'react'

function Calculator() {
  const [theme, setTheme] = useState("light")
  const [result, setResult] = useState("");
  const handleClick = e => setResult(result.concat(e.target.id))
  const clear = () => setResult("")
  const deleteEl = () => setResult(result.slice(0, -1))

  const calculate = () => {
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("Error")
    }
  }


  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
  <div
  className={`flex flex-col items-center justify-center h-screen transition-colors duration-300 ${
    theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
  }`}
>
  <h1 className="text-3xl font-bold mb-6">Calculadora</h1>
  <div className="flex flex-col items-center justify-center w-full max-w-md p-6 rounded-lg shadow-lg">
    <div className="flex items-center justify-between w-full mb-4">
      <div className="grid grid-cols-3 gap-2">
        <button
          onClick={handleClick}
          id="7"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          7
        </button>
        <button
          onClick={handleClick}
          id="8"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          8
        </button>
        <button
        id="9"
         onClick={handleClick}
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          9
        </button>
        <button
          onClick={handleClick}
          id="4"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          4
        </button>
        <button
         onClick={handleClick}
         id="5"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          5
        </button>
        <button
          onClick={handleClick}
          id="6"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          6
        </button>
        <button
          onClick={handleClick}
          id="1"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          1
        </button>
        <button
          onClick={handleClick}
          id="2"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          2
        </button>
        <button
         onClick={handleClick}
         id="3"
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            theme === "dark"
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-gray-200 text-gray-900 hover:bg-gray-300"
          }`}
        >
          3
        </button>
      </div>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        {theme === "dark" ? "\u2600\uFE0F" : "\uD83C\uDF19"}
      </button>
    </div>
    <div className="grid grid-cols-4 gap-4 w-full">
      <button
        onClick={handleClick}
        id="+"
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        +
      </button>
      <button
      id="-"
        onClick={handleClick}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        -
      </button>
      <button
        onClick={handleClick}
        id="*"
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        *
      </button>
      <button
        onClick={handleClick}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        /
      </button>
      <button
       onClick={calculate}
       id="="
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        =
      </button>
      <button
        onClick={clear}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        Clear
      </button>
      <button
       onClick={deleteEl}
        className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
          theme === "dark"
            ? "bg-gray-800 text-white hover:bg-gray-700"
            : "bg-gray-200 text-gray-900 hover:bg-gray-300"
        }`}
      >
        Del
      </button>
    </div>
    <div className="mt-6 w-full ">
      <input
        className={`px-4 py-2 rounded-lg transition-colors duration-300 focus:outline-none w-full ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200 text-gray-900"
        }`}
        value={result}
      />
      

    </div>
  </div>
</div>
  )
  
}

export default Calculator