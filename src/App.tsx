import './App.css'
import Search from "./components/Search.tsx";
import Detail from "./components/Detail.tsx";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <>
          <Routes>
                  <Route path="/shows/:id" element={<Detail />} />
                  <Route path="/" element={<Search />} />
          </Routes>
    </>
  )
}

export default App
