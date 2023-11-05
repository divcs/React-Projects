import { useState } from 'react'
function App() {
  const [value, setValue] = useState(0)

  function increment(value) {
    setValue(value + 1)
  }

  function decrement(value) {
    setValue(value - 1)
  }
  function reset(value) {
    setValue(0)
  }

  return (
    <>
      <h1>Counter: {value}</h1>
      <button onClick={() => increment(value)}>Increment</button>
      <button onClick={() => reset(value)}>Reset</button>
      <button onClick={() => decrement(value)}>Decrement</button>
    </>
  )
}

export default App
