import Components2 from './Components2.js';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Atv04(){
    return (
        <>
        <div className="Index">
            <header className="Index-header">
                <nav className="navbar">
                    <h1>Atividade 4</h1>
                    <Link to="/">
                        <button className="btn-voltar">VOLTAR AO MENU</button>
                    </Link>
                </nav>
                <Components2/>
                <br />
                    
            </header>
        </div>
        </>
    );
}