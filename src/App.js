import './App.css';
import Navbar from './components/Navbar';
import PlaceCard from './components/placeInfo/PlaceCard';
import PlaceImage from './components/placeInfo/PlaceImage';
function App() {
  return (
    <>
  <Navbar></Navbar>
  <div id='page__container'>
    <div id='first__part'>
    <PlaceCard></PlaceCard>
    <PlaceImage></PlaceImage>
    </div>
  </div>
    </>
  );
}

export default App;
