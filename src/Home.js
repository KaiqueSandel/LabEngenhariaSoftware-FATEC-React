import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return (
            <div className="Index">
                <>
                    <header className="Index-header">
                        <nav className="navbar">
                            <h1>Atividades React - Fatec Presidente Prudente</h1>
                        </nav>
                        
                        <ul>
                            <li>
                                <Link to="/Atv01"><button className="btn-voltar">Atividade 1</button></Link>
                            </li>
                            <li>
                                <Link to="/Atv02>"><button className="btn-voltar">Atividade 2</button></Link>
                            </li>
                            
                        </ul>
                        
                           
                    </header>
                </>
            </div>    
    );
}
export default Home;