import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Screen from './components/Screen';
import Home from './components/Home';
import Login from './components/LoginPage';
import Signup from './components/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Screen />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<p>Movies Component</p>} />
          <Route path="series" element={<p>Tv Series Component</p>} />
          <Route path="bookmarks" element={<p>Bookmarks Component</p>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
