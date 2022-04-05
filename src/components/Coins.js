import React from 'react'
import './Coins.css'

function Coins({nombre, icono, precio, simbolo, twitter, web}) {
  return (
    <div className='container'>
        <div className='wrapper'>
            <div className='img-area'>
                <div className='inner-area'>
                <img src={icono}/>
                </div>
            </div>
            <div className='name'> {nombre} </div>
            <div className='about'>Precio: {precio}</div>
            <div className='simbolo'> Simbolo: {simbolo} </div>
            <div className='buttons'>
            
                <button> Twitter </button>
                <button> Pagina Web </button>
            </div>
        </div>
    </div>
  )
}

export default Coins