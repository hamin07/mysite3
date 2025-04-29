
import './App.css';
import HomePage from './pages/home/HomePage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
// import Gallerypage from './pages/gallery/GalleryPage';
// import BlogPage from './pages/blog/BlogPage';
import AboutMePage from './pages/aboutMe/AboutMePage'; 
// import MyStorypage from './pages/myStory/MyStoryPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="App">
          <header className="app-header">
          <Header />
          </header>
          <main>
            <Routes>
               <Route path="/" element={<HomePage />} />
               <Route path="/about-me" element={<AboutMePage />} />
               {/* <Route path="/gallery" element={<Gallerypage />} />
               <Route path="/blog" element={<BlogPage />} />
               <Route path="/my-story" element={<MyStoryPage />} /> */}
            </Routes>
            <footer className="app-footer">
            <Footer/>
            </footer>
          </main>
        </div>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
