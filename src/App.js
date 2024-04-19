
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import Detail from "./pages/detail/Detail";
import Explore from "./pages/explore/Explore";
import Page404 from "./pages/Page404/Page404";
import SearchResult from "./pages/searchResult/SearchResult";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { fetchDataFromApi } from "./utils/api";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfig, getGenres } from "./store/homeSlice";
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    fetchApiConfig()
  }, [])

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfig(url));
    });
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mediaType/:id" element={<Detail />} />
          <Route path="/search/:query" element={<SearchResult />} />
          <Route path="/explore/:mediaType" element={<Explore />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
