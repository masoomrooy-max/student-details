
import Home from './components/Home.jsx'
import Content from './components/Content.jsx'
import {BrowserRouter, Routes
  , Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student/:id" element={<Content />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
