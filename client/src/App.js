import Home from './pages/Home';
import Receive from './pages/Receive';
import Send from './pages/Send';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Routes>

          <Route path="/" exact element={<Home />} />
          <Route path="/send" exact element={<Send />} />
          <Route path="/receive" exact element={<Receive />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
