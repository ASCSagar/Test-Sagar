import { Route, Routes } from "react-router-dom";
import "./App.css";
import Email from "./component/EmailTemplate";
import GoogleCalender from "./component/GoogleCalender";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Email />} />
        <Route path="/googleCalender" element={<GoogleCalender />} />
      </Routes>
    </div>
  );
}

export default App;
