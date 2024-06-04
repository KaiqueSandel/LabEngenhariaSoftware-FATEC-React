import Components3 from './Components3.js';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Atv05(){
    return (
        <>
        <div className="Index">
            <header className="Index-header">
                <nav className="navbar">
                    <h1>Atividade 5</h1>
                    <Link to="/">
                        <button className="btn-voltar">VOLTAR AO MENU</button>
                    </Link>
                </nav>
                <Components3/>
                <br />
                    
            </header>
        </div>
        </>
    );
}