import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movie from "./Components/Movie";
import Tvshows from "./Components/Tvshows";
import People from "./Components/People";
import Moviedetails from "./Components/moviedetails";
import Tvdetails from "./Components/Tvdetails";
import Persondetails from "./Components/Persondetails";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#1F1E24] flex">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/Movie" element={<Movie />} />
        <Route path="/Movie/details/:id" element={<Moviedetails />} />

        <Route path="/Tvshows" element={<Tvshows />} />
        <Route path="/Tvshows/details/:id" element={<Tvdetails />} />

        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<Persondetails />} />
      </Routes>
    </div>
  );
};

export default App;
