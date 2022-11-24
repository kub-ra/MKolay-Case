import './App.css';
import Login from './components/Login';
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";
import QrCode from './components/QrCode';
import Shopping from './components/Shopping';
import Complete from './components/Complete';



function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/kantin" element={<QrCode />} />
          <Route exact path="/alisveris" element={<Shopping />} />
          <Route exact path="/complete" element={<Complete />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
