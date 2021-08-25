import React from 'react'
import logo from '../img/logo.svg'


export default function Corpo(){

    const options = {
        timeZone: 'America/Sao_Paulo',
        hour: 'numeric',
        minute: 'numeric'
    };
    const date = new Intl.DateTimeFormat([], options);
    console.log(date.format(new Date()));

    return (

       <>
            <span>{date} às {options}</span>

               
            <div>
                <img src={localStorage.svg}/>
            </div>

            <div>
                <p>Por ser uma doença nova, a Covid-19 ainda nao foi compreendida totalmente pela comunidade médica global. Os conhecimentos sobre a doença estão em constante atualização,
                incluindo os sintomas e os impactos para a saúde a curto e longo prazos.</p>
            </div>

            <div>
                <p>
                    A variante delta da Covid-19, originalmente conhecida como B.1.617.2, existe desde o final do ano passado, mas nos últimos meses tornou-se rapidamente dominante em muitos
                    países. Ainda não está claro o quanto essa cepa é mais transmissível. Estimativas variam entre 60% e 200% mais transmissível, dependendo de quem apresenta a estimativa.
                </p>

            </div>
            
        </>
        
    )

}