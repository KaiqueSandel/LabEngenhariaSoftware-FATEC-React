import React from 'react';
import { Link } from 'react-router-dom';
import Relogio from './Relogio';
import Letreiro from './Letreiro';
import './index.css';

export default function Atv01(){
    return (
        <>
        <div className="Index">
            <header className="Index-header">
                <nav className="navbar">
                    <h1>Atividade 1</h1>
                    <Link to="/">
                        <button className="btn-voltar">VOLTAR AO MENU</button>
                    </Link>
                </nav>

                <Relogio />
                <Letreiro />
                <br />
                    
            </header>
        </div>
        </>
    );
}
