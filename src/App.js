import './App.css';
import "./assets/fonts/fonts.css";
import { NavBar } from "./components/navbar/NavBar";
import { Home } from "./components/home/Home";
import { Booking } from "./components/booking/Booking";
import { Hotel } from './components/hotel/Hotel';
import { Rooms } from './components/rooms/Rooms';
import { HashRouter, Routes, Route} from "react-router-dom";
import { SightSeeing } from "./components/sightSeeing/SightSeeing.jsx";
import { Gallery } from "./components/gallery/Gallery";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/cloversinn" element={<Home><NavBar /></Home>}></Route>
        <Route path="/booking" element={<Booking></Booking>}></Route>
        <Route path="/hotel" element={<Hotel></Hotel>} />
        <Route path="/rooms" element={<Rooms></Rooms>}></Route>
        <Route path="/sight-seeing" element={<SightSeeing></SightSeeing>}></Route>
        <Route path="/gallery" element={<Gallery></Gallery>}></Route>

      </Routes>
    </HashRouter>
  );
}

export default App;
