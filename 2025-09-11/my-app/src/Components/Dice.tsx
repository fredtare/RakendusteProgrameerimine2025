import { useState } from "react"

import "../App.css"

function Dice() {
  const [roll, setRoll] = useState(Math.floor(Math.random() * 7))
  const [die, setDie] = useState(6)

  function rollDice() {
    setRoll(Math.floor(Math.random() * (die)) + 1)
  }

  function dieSetter(event: React.ChangeEvent<HTMLInputElement>){
    setDie(Number(event.target.value))
  }

  return (
    <>
      <h2>Täringuveeretus on: {roll}</h2>
      <div className="diceRoller">
        <label htmlFor="d2">Münt</label>
        <input type="radio" name="DieSelector" id="d2"  value="2" onChange={dieSetter}/>
        <label htmlFor="d6">Tavatäring</label>
        <input type="radio" name="DieSelector" id="d6"  value="6" defaultChecked onChange={dieSetter}/>
        <label htmlFor="d20">d20</label>
        <input type="radio" name="DieSelector" id="d20"  value="20" onChange={dieSetter}/>
        <div>
          <button onClick={() => rollDice()}>Veereta täring uuesti!</button>
        </div>
      </div>
    </>
  )
}

export default Dice