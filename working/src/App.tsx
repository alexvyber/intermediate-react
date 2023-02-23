import { Route, Routes } from "react-router-dom"
import { Nav } from "./components/nav"
import { Home } from "./components/home"
import "./App.css"
import { UseRef } from "./routes/use-ref"
import { UseReducer } from "./routes/use-reducer"
import { UseMemo } from "./routes/use-memo"
import { UseCallback } from "./routes/use-callback"

function App() {
  return (
    <div className="App">
      asdf
      <Nav />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useReducer" element={<UseReducer />} />
        <Route path="/useMemo" element={<UseMemo />} />
        <Route path="/useCallback" element={<UseCallback />} />
        <Route path="/useRef" element={<UseRef />} />
        {/* <Route path="/useLayoutEffect" element={<UseLayoutEffect />} /> */}
        {/* <Route path="/useId" element={<UseId />} /> */}
      </Routes>
    </div>
  )
}

export default App
