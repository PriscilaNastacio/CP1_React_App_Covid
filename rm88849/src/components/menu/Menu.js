import React from 'react'
import '../menu/Menu.css'

export default function Menu(props) {

    const listaMenu = props.menu.map(
        (c, i) =>
            <li key={i}>{c}</li>
    )

    return (
        <>
            <header className="header__group">
                <div className="header__main">
                    <nav id="content_menu" className="content_menu">
                        <ul id="menu-menu-header" className="menu">
                            {listaMenu}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}
