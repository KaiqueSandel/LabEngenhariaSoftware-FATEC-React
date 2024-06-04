import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const Home = () =>{
    return (
        <div className="Index">
        <header className="Index-header">
            <nav className="navbar">
                <div>
                    <h1>Atividades React - Fatec Presidente Prudente</h1>
                </div>
            </nav>
            <ul>
                <li>
                    <Link to="/Atv01"><button className="btn-voltar">Atividade 1</button></Link>
                </li>
                <li>
                    <Link to="/Atv02"><button className="btn-voltar">Atividade 2</button></Link>
                </li>
                <li>
                    <Link to="/Atv03"><button className="btn-voltar">Atividade 3</button></Link>
                </li>
                <li>
                    <Link to="/Atv04"><button className="btn-voltar">Atividade 4</button></Link>
                </li>
                <li>
                    <Link to="/Atv05"><button className="btn-voltar">Atividade 5</button></Link>
                </li>
            </ul>
        </header>
</div>            
    );
}
export default Home;
/** feio mas funciona
 *       <div>
            <h1>Atividades React - Fatec Presidente Prudente</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/Atv01">Atividade 01</Link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 02</Link>
                    </li>
                </ul>
            </nav>
        </div>
 */

/** bonito mas n funciona
 * <div className="Index">
            <header className="Index-header">
                <nav className="navbar">
                    <div>
                        <h1>Atividades React - Fatec Presidente Prudente</h1>
                    </div>
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
    </div>  
 */








/** github e funciona
 *         <div className='Index'>
            <header className='Index-header'>
                    <nav className='navbar'>
                        <div>
                            <h1>Atividades React - Fatec Presidente Prudente</h1>
                        </div>
                    </nav>
                        <ul>
                            <li>
                                <Link to="/Atv01"><button className="btn-voltar">Atividade 01</button></Link>
                            </li>
                            <li>
                                <Link to="/Atv02"><button className="btn-voltar">Atividade 02</button></Link>
                            </li>
                        </ul>
            </header>
        </div>
 */