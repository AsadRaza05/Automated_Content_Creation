
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./Home.js";
import Scheduling from "./Scheduling.js";
import Analytics from "./Analytics.js";

export default function Routers() {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/Scheduling" element={<Scheduling/>} />
              <Route exact path="/Analytics" element={<Analytics/>} />
          </Routes>
      </BrowserRouter>
  ) ;
}

