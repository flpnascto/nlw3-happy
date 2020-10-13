import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarketImg from '../images/map-marker.svg';

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarketImg} alt="mapMarker"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </footer>

      </aside>

      <Map
        center={[-19.9262, -43.9383]}
        zoom={12.75}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      </Map>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;