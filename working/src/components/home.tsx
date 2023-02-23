import { Link } from "react-router-dom"

export function Home() {
  return (
    <div className="home-links">
      <Link className="home-link" to="/useRef">
        useRef
      </Link>
      <hr />
      <Link className="home-link" to="/useReducer">
        useReducer
      </Link>
      <hr />
      <Link className="home-link" to="/useMemo">
        useMemo
      </Link>
      <hr />
      <Link className="home-link" to="/useCallback">
        useCallback
      </Link>
      <hr />
      <Link className="home-link" to="/useLayoutEffect">
        useLayoutEffect
      </Link>
      <hr />
      <Link className="home-link" to="/useId">
        useId
      </Link>
    </div>
  )
}
