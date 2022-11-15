import { Container } from "react-bootstrap";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Mform from "./Components/Navi/Navi";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";

function App() {


  
  return (
    <BrowserRouter>
      <div className="App">
        <Container className="ca">
          <div className="main-form px-5 py-3 rounded mx-auto shadow">
            <Mform />

            <Routes>
              <Route index element={<Login />} />
              <Route path="Register" element={<Register />} />
            </Routes>
          </div>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
