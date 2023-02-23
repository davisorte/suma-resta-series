import { useState } from 'react'

import './App.css'
import { figonacci } from './calcula/figonaci'
import { valorN } from './calcula/numeroPrimo'
import { triangular } from './calcula/triangular'
import Resultado from './resultado/Resultado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        
      </div>
      <div className="card">
        {/*<button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
  </p>*/}
        <input
            type="number"
            placeholder="escribe n "
            className="input-form"
            value={count.toString()}
            onChange = {(e)=>{ 
              let numero = e.target.value;
              setCount(numero)}}
          />
       <input
            type="submit"
            className="input-cal"
            value={"Borrar"}
            onClick = {(e)=> setCount(0)}
          />
      </div>
      <div>
      <Resultado  value={count}></Resultado>
      </div>
    </div>
  )
}

export default App
