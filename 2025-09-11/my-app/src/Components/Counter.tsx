import { useState } from "react"
import "../App.css"

function Counter() {
  const [count, setCount] = useState(0)

  function increaseCounter(number: number) {
    setCount(count => count + number)
  }
  //pmst noolcunktsioon on see mis ootab lihtsalt userinputi käivitamiseks
  return (
    <>
      <h2>Arv on {count}</h2>
      <div className="card">
        <button onClick={() => increaseCounter(100)}>100</button>
        <button onClick={() => increaseCounter(50)}>50</button>
        <button onClick={() => increaseCounter(25)}>25</button>
        <button onClick={() => increaseCounter(1)}>1</button>
        <button onClick={() => increaseCounter(-25)}>-25</button>
        <button onClick={() => increaseCounter(-50)}>-50</button>
        <button onClick={() => increaseCounter(-100)}>-100(Ainult omal vastutusel)</button>

          <div>
            <button onClick={() => increaseCounter(-count)}>reset counter</button>
         </div>

      </div>
    </>
  )
}

export default Counter