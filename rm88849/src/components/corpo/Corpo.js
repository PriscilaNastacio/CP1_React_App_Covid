import React from 'react'
import logo from '../img/logo.svg'
import '../corpo/Corpo.css'


export default function Corpo() {

    
    return (

        <>
        
        <div className="container">
            <div className="materia">

                <div className="covid">
                    <div className="cnn1" >
                        <img className="cnn" src={logo} />
                    </div>
                    <div>
                        <p className= 'parag1'>Por ser uma doença nova, a <span className= "cor">Covid-19</span> ainda nao foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização, incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
                    </div>
                    <div className= 'parag2'>
                        <p>A <span className= "cor">variante delta da Covid-19,</span>variante delta da Covid-19, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.</p>
                    </div>
                </div>
            </div>
        </div>  
        </>

    )
}