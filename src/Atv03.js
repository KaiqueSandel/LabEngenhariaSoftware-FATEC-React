import Components from './Components.js';
import React from 'react';
import { Link } from 'react-router-dom';
/*
* import { Profile } from './Components.js';
*/

export default function Atv03(){
    return (
        <>
        <div className="Index">
            <header className="Index-header">
                <nav className="navbar">
                    <h1>Atividade 3</h1>
                    <Link to="/">
                        <button className="btn-voltar">VOLTAR AO MENU</button>
                    </Link>
                </nav>
                <Components/>
                <br />
                    
            </header>
        </div>
        </>
    );
}


/**
 * export default function Atv03(){
    return (
        <Profile />;
    );
}
 */