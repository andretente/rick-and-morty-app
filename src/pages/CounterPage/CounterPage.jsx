import { useState } from "react"

import CounterButton from "./components/CounterButton/CounterButton"
import CounterDisplay from "./components/CounterDisplay/CounterDisplay"

export default function CounterPage() {
  const [countValue, setCountValue] = useState(0)

  return (
    <div style={{ margin: "0 auto", textAlign: "center" }}>
      <CounterDisplay value={countValue} />

      <CounterButton
        text="Remove 1"
        onClick={() => setCountValue(countValue - 1)}
      />

      <CounterButton
        text="Add 1"
        onClick={() => setCountValue(countValue + 1)}
      />
    </div>
  )
}
