import  Axios  from 'axios';
import React, { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import Coins from './components/Coins';

function App() {

  const [listaDeMonedas, setListaDeMonedas] = useState([]);
  const [buscarMoneda, setBuscarMoneda] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((response) => {
      console.log(response.data);
      setListaDeMonedas(response.data.coins);
    })
  }, []);

  const filtrarMonedas = listaDeMonedas.filter((coin) => {
    return coin.name.toLowerCase().includes(buscarMoneda.toLocaleLowerCase());
  })
  
  return (
    <div className="App">
      <div className='Header'><SearchBar palabra={(event) => {setBuscarMoneda(event.target.value)}}/></div>
      <div className='Content'>{filtrarMonedas.map((coin) => {
        return <Coins nombre={coin.name} icono={coin.icon} precio={coin.price} simbolo={coin.symbol} twitter={coin.twitterUrl} web={coin.websiteUrl}/>;
      })}
      </div>
    </div>
  );
}

export default App;
