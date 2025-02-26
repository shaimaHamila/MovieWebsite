import { Route, Routes } from "react-router-dom";
import MainLayout from "../pages/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDtails";
import Favorites from "../pages/Favorites/Favorites";

const PublicRouts = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='' element={<Home />} />
        <Route path='favorites' element={<Favorites />} />
        <Route path='movie-details/:id' element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};
export default PublicRouts;
