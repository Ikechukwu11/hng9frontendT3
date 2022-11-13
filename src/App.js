import './App.css';
import Home from "./components/Home";
import Place from "./components/Place";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <Routes>
    <Route exact path="/place" element={ <Place />} />
    <Route exact path="/" element={ <Home />} />  
  </Routes>
  );
}

export default App;
