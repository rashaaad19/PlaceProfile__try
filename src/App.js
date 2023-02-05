import './App.css';
import Navbar from './components/Navbar';
import PlaceCard from './components/placeInfo/PlaceCard';
import PlaceImage from './components/placeInfo/PlaceImage';
import ReviewCard from './components/reviews/ReviewCard';
import ReviewCardButton from './components/reviews/ReviewCardButton';
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
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    <ReviewCard></ReviewCard>
    <ReviewCardButton></ReviewCardButton>
    </div>
  </div>
    </>
  );
}

export default App;
