import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root'))

function MultiCounter() {
  const [counts, setCounts] = React.useState(
    {
      countA: 0,
      countB: 0,
    }
  )

  const incrementA = () => {
    setCounts((counts) => {
      return {
        ...counts,
        countA: counts.countA + 1
      }
    })
  }

  const incrementB = () => {
    setCounts((counts) => {
      return {
        ...counts,
        countB: counts.countB + 1
      }
    })
  }

  const badIncrementA = () => {
    setCounts({
      countA: counts.countA + 1  // remember to copy the existing state for more complex objects; unlike this.setState useState setter is not shallow, it will just wipe out whatever is in the state
    })
  }

  return(
    <>
      <button onClick={incrementA}>Increment A</button>
      <div>Count A: {counts.countA}</div>
      <button onClick={incrementB}>Increment B</button>
      <div>Count B: {counts.countB}</div>
      <button onClick={badIncrementA}>Bad increment A</button>
    </>
  )
}
root.render(
  <MultiCounter />
)
