import React from 'react'
import Menu from '../menu/Menu'
import Cabecalho from '../cabecalho/Cabecalho'
import logo from '../img/logo.svg'
import '../corpo/Corpo.css'


export default function Corpo() {

    const menu = ""
    const listaMenu = ['Nacional', 'Business', 'Internacional', 'Saúde', 'Tecnologia', 'Esporte', 'Entreterimento', 'Estilo', 'Viagem & Gastronomia', 'Newsletters', 'Podcasts']

    return (

        <>
            <Menu menu={listaMenu} />
            <div className="site_content">

                <div className="row">
                    <main className='posts.col'>
                        <Cabecalho />
                        <div className="container_sm">
                            <div className="post_content">
                                <div className='logo'>
                                    <img className="custom-logo" src={logo}/>
                                </div>
                                <div>
                                    <div>
                                        <p className='parag1'>Por ser uma doença nova, a <span className="cor">Covid-19</span> ainda nao foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
                                    </div>
                                    <div>
                                        <p className='parag2'>A <span className="cor">variante delta da Covid-19,</span> originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>

    )
}