import NavBar from './components/NavBar';
import Footer from './components/Footer';

import { Routes,Route } from 'react-router';

// pages
import AboutPage from './pages/AboutPage';
import Home from './pages/Home';
import ResultsPage from './pages/ResultsPage';
import JoinPage from './pages/JoinPage';

// comp
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
    <>
      <div className="text-zinc-100 bg-black p-4">
        <NavBar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/results" element={<ResultsPage />} />
          <Route path="/join" element={<JoinPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
