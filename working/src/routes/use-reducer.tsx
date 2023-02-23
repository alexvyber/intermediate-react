import { useReducer } from "react"

const getRandom = () => Math.floor(Math.random() * 100)

// fancy logic to make sure the number is between 0 and a max
const limit = (num: number, max: number) =>
  num < 0 ? 0 : num > max ? max : num
const limit100 = (num: number) => limit(num, 100)

const step = 20

type HSLObject = {
  [key in HSL]: number
}

type HSL = "h" | "s" | "l"
type Actions = "INCREMENT" | "DECREMENT"
type HSLActions = `${Actions}_${Capitalize<HSL>}`

const reducer = (state: HSLObject, action: { type: HSLActions }) => {
  switch (action.type) {
    case "INCREMENT_H":
      return Object.assign({}, state, { h: (state.h + step) % 360 })
    case "DECREMENT_H":
      return Object.assign({}, state, { h: (state.h - step) % 360 })
    case "INCREMENT_S":
      return Object.assign({}, state, { s: limit100(state.s + step) })
    case "DECREMENT_S":
      return Object.assign({}, state, { s: limit100(state.s - step) })
    case "INCREMENT_L":
      return Object.assign({}, state, { l: limit100(state.l + step) })
    case "DECREMENT_L":
      return Object.assign({}, state, { l: limit100(state.l - step) })
    default:
      return state
  }
}

export const UseReducer = () => {
  const [{ h, s, l }, dispatch] = useReducer(reducer, {
    h: getRandom(),
    s: getRandom(),
    l: getRandom(),
  })

  return (
    <div className="page use-reducer">
      <h1
        className="readable-banner"
        style={{
          color: `hsl(${(h + 180) % 360}, ${s}%, ${(l + 50) % 100}%)`,
          backgroundColor: `hsl(${h}, ${s}%, ${l}%)`,
        }}>
        This text should always be pretty close to readable
      </h1>
      <div className="btn-groups">
        <div className="btn-group">
          <span className="btn-label">Hue</span>
          <button onClick={() => dispatch({ type: "INCREMENT_H" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_H" })}>➖</button>
        </div>
        <div className="btn-group">
          <span className="btn-label">Saturation</span>
          <button onClick={() => dispatch({ type: "INCREMENT_S" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_S" })}>➖</button>
        </div>
        <div className="btn-group">
          <span className="btn-label">Lightness</span>
          <button onClick={() => dispatch({ type: "INCREMENT_L" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_L" })}>➖</button>
        </div>
      </div>
    </div>
  )
}
