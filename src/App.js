import { Route, Routes } from "react-router-dom";
import "./App.css";
import Test from "./component/Test";
import Sagar from "./component/Sagar";
import Ramani from "./component/Ramani";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/sagar" element={<Sagar />} />
        <Route path="/ramani" element={<Ramani />} />
      </Routes>
    </div>
  );
}

export default App;
