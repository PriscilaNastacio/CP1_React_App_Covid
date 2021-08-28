import React from 'react'
import '../cabecalho/Cabecalho.css'
import author from '../img/author.png'


export default function Cabecalho() {

    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();
    var dataAtual = dia + '/' + mes + '/' + ano;

    // Obtém a data/hora atual
    var data = new Date();

    // Guarda cada pedaço em uma variável
    var dia = data.getDate();           // 1-31
    var dia_sem = data.getDay();            // 0-6 (zero=domingo)
    var mes = data.getMonth();          // 0-11 (zero=janeiro)
    var ano2 = data.getYear();           // 2 dígitos
    var ano4 = data.getFullYear();       // 4 dígitos
    var hora = data.getHours();          // 0-23
    var min = data.getMinutes();        // 0-59
    var seg = data.getSeconds();        // 0-59
    var mseg = data.getMilliseconds();   // 0-999
    var tz = data.getTimezoneOffset(); // em minutos

    // Formata a data e a hora (note o mês + 1)
    var str_data = dia + '/' + (mes + 1) + '/' + ano4;
    var str_hora = hora + ':' + min;


    return (
        <>

            <header className="post_header">
                <h1 className='post_title'>
                    Quais são os sintomas da variante Delta da Covid-19? Teste seus conhecimentos
                </h1>
                <hr />
                <p className='post_excerpt'>A infecção causada pela variante Delta pode provocar sintomas diferentes da doença causada pela linhagem original do novo coronavírus</p>

                <section className='author_content'>
                    <figure className="author_image">
                        <img src={author} />
                    </figure>
                </section>

                <hr />
                <div className='higher_share'>
                    <span className='post_data'>{str_data} às {str_hora} | Atualizado às {str_hora}</span>
                </div>
            </header>

        </>

    )
}