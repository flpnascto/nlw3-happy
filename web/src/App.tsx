import React from 'react';

import './styles/global.css';
import './styles/pages/landing.css'

import logoImg from '../src/images/logo.svg'

function App() {
  return (
    <div id="page-landing">
      <div className="content-wrapper"></div>
        <img src={logoImg} alt="Happy"></img>
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <div className="location">
          <strong>Belo Horizonte</strong>
          <span>Minas Gerais</span>
        </div>

        <a href="" className="enter-app">
          enter
        </a>
    </div>
  );
}

export default App;
