import React  from 'react'; 
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi'; 
import { MapContainer, TileLayer} from 'react-leaflet';

import '../styles/orphanages-map.css';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../images/map.svg';
///import mapIcon from '../utils/mapIcon';


/*interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}*/

function OrphanagesMap() {
  
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy"/>

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Góias</strong>
          <span>Goiânia</span>
        </footer>
      </aside>

      <MapContainer
        center={[-16.6782694, -49.31457]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        
            <TileLayer 
            url={'https://api.mapbox.com/styles/v1/mapbox/light-v-18/tiles/256/{z}/{x}/{y}@2x?access_token=$(process.env.REACT_APP_MAPBOX_TOKEN)'} 
            />
      
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default OrphanagesMap;