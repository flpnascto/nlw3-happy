import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi'

import mapMarketImg from '../images/map-marker.svg';

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

      <div>
        {/* div for map */}
      </div>

      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>

    </div>
  );
}

export default OrphanagesMap;