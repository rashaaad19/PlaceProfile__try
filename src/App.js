import './App.css';
import Navbar from './components/Navbar';
import PlaceCard from './components/placeInfo/PlaceCard';
import PlaceImage from './components/placeInfo/PlaceImage';
import ReviewHeader from './components/reviews/ReviewHeader';
import SliderContainer from './components/Slider/SliderContainer';
function App() {
  return (
    <>
  <div id='page__container'>
  <Navbar></Navbar>
    <div id='first__part'>
    <PlaceCard></PlaceCard>
    <PlaceImage></PlaceImage>
    </div>
    <div id='second__part'>
    <SliderContainer></SliderContainer>
    </div>
    <div id='third__part'>
    <ReviewHeader></ReviewHeader>
    </div>
  </div>
    </>
  );
}

export default App;
