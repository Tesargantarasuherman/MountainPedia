import L from 'leaflet';
import marker from '../assets/icon/location.svg';
import placeholder from '../assets/icon/placeholder.svg'
import { IoCloudyNight } from 'react-icons/io5';

const iconPerson = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    popupAnchor:  [-0, -0],
    iconSize: [32,45], 
});
export { iconPerson };
