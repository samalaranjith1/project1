 import './App.css';
import ImageGallery from './components/top-container/image-contianer/ImageGallery';
import Container from './components/top-container/logo-container/Container';
import Navbar from './components/top-container/navbar-container/Navbar';
import ScrollingNews from './components/top-container/scrolling-container/ScrollingNews';
import Tagline from './components/top-container/tagline-conatiner/Tagline';
function App() {
  return (
    <div className="container">
      Happy Birthday master
      <Container />
      <Tagline /> 
      <Navbar />
      <ImageGallery />
      <ScrollingNews />
      
    </div>
  );
}

export default App;


