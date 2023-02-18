 import './App.css';
import Container from './components/top-container/logo-container/Container';
import Navbar from './components/top-container/navbar-container/Navbar';
import Tagline from './components/top-container/scrolling-container/Tagline';
function App() {
  return (
    <div className="container">
      Happy Birthday master
      <Container />
      <Tagline /> 
      <Navbar />
      
    </div>
  );
}

export default App;


