import React from 'react'
import Cabecalho from './components/cabecalho/Cabecalho'
import Corpo from './components/corpo/Corpo'
import '../src/App.css'
import Menu from './components/menu/Menu'


export default function App(){

    return(

        <>
        <Menu/>
        <div className='content'>
            <Cabecalho/>
            <Corpo/>
        </div>
        </>
    )
}