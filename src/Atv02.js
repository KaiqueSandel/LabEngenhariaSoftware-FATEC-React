import React from 'react';
import { Link } from 'react-router-dom';
import Contador from './Contador';
import './index.css';

export default function Atv02(){
    return (
        <>
        <div className="Index">
            <header className="Index-header">
                <nav className="navbar">
                    <h1>Atividade 2</h1>
                    <Link to="/">
                        <button className="btn-voltar">VOLTAR AO MENU</button>
                    </Link>
                </nav>
                <Contador />
                <br />
                    
            </header>
        </div>
        </>
    );
}
