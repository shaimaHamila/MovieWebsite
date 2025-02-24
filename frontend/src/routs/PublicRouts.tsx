import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Favorits from "../pages/Favorits/Favorits";
import MovieDetails from "../pages/MovieDetails/MovieDtails";

const PublicRouts = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='Favorits' element={<Favorits />} />
        <Route path='movie-details/:id' element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
export default PublicRouts;
