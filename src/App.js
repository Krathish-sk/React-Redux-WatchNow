import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import {
  Header,
  Footer,
  Home,
  MovieDetail,
  PageNotFound,
  UserPage,
} from "./components";

export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
            <Route path="/userprofile" element={<UserPage />} />
            <Route element={<PageNotFound />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
