import './PlaceImage.css'
import PlaceTags from './PlaceTags'
const PlaceImage=()=>{
    return <>
    <div id='image__container'>
    <img id='place__image' src='/assets/images/dusk.jpg' alt='bla bla'></img>
    <div id='tag__container'>
    <PlaceTags></PlaceTags>
    <PlaceTags></PlaceTags>
    <PlaceTags></PlaceTags>
    <PlaceTags></PlaceTags>
    <PlaceTags></PlaceTags>
    
    </div>
    </div>

    </>
}
export default PlaceImage