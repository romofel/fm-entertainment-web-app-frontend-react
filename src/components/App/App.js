import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Screen from '../Screen';
import Home from '../Home';
import MoviesPage from '../MoviesPage';
import SeriesPage from '../SeriesPage';
import BookmarksPage from '../BookmarksPage';
import Login from '../LoginPage';
import Signup from '../SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="series" element={<SeriesPage />} />
          <Route path="bookmarks" element={<BookmarksPage />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
