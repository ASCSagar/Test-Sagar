import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sagar from "./component/Sagar";
import Ramani from "./component/Ramani";
import GoogleCalender from "./component/GoogleCalender";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GoogleCalender />} />
        <Route path="/sagar" element={<Sagar />} />
        <Route path="/ramani" element={<Ramani />} />
      </Routes>
    </div>
  );
}

export default App;
