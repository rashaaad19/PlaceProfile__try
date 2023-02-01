import './PlaceCard.css'
import {AiFillStar} from 'react-icons/ai'
const PlaceCard = () => {
  return <>
  <div id="info__container">
    <div id="info__header">
    <p id='place__header'>Place Name</p>
    <p id='place__distance'>100 km</p>
    </div>
    <div id='rating__container'>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    <AiFillStar></AiFillStar>
    </div>
    <div id='info__par'>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida dictum nunc dignissim gravida. Curabitur ac vestibulum magna. Aenean eget odio nec lorem laoreet posuere sit amet sit amet ex. Vestibulum pellentesque lacus justo, et lobortis nisl molestie sed. Morbi convallis, est sit amet porta scelerisque, nibh ve
      </p>
      <div className='review__button'>
        Write Review
      </div>
    </div>
    </div>
   
  </>;
};
export default PlaceCard;
