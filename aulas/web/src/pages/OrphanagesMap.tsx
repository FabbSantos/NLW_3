import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import MapMarkerImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css';
// import { tileLayer } from 'leaflet';


function OrphanagesMap () {
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={ MapMarkerImg } alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita =)</p>
                </header>
                
                <footer>
                    <strong>Rio de Janeiro</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <Map 
                center={[-22.9311479,-43.3584274]}
                zoom={15}
                style={{ width:'100%', height: '100%' }}
            >
                
                <TileLayer 
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MABPOX_TOKEN}`} 
                />
            </Map>

            <Link to ="" className="create-orphanage"> 
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    );
};

export default OrphanagesMap;