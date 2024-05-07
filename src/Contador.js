import React, { useState } from 'react';
import './index.css'; 
import homemImage from './homem.jpg';
import mulherImage from './mulher.jpg'; 

function App() {
  const [totalHomens, setTotalHomens] = useState(0);
  const [totalMulheres, setTotalMulheres] = useState(0);

  const adicionarHomem = () => {
    setTotalHomens(totalHomens + 1);
  };

  const removerHomem = () => {
    if (totalHomens > 0) {
      setTotalHomens(totalHomens - 1);
    }
  };

  const adicionarMulher = () => {
    setTotalMulheres(totalMulheres + 1);
  };

  const removerMulher = () => {
    if (totalMulheres > 0) {
      setTotalMulheres(totalMulheres - 1);
    }
  };

  const resetarPessoas = () => {
    setTotalHomens(0);
    setTotalMulheres(0);
  };

  return (
    <div className="container">
      <h1>Total</h1>
      <div className="total-container">
        <div className="total-box">
          <span className="total-number">{totalHomens + totalMulheres}</span>
        </div>
        <button className="refresh-btn" onClick={resetarPessoas}></button>
      </div>

      <div className="pessoa-container">
        <div className="pessoa">
          <img src={homemImage} alt="Homem" />
          <div className="quantidade">Homens: {totalHomens}</div>
          <div className="botoes">
            <button className="botao adicionar" onClick={adicionarHomem}>+</button>
            <button className="botao remover" onClick={removerHomem}>-</button>
          </div>
        </div>

        <div className="pessoa">
          <img src={mulherImage} alt="Mulher" />
          <div className="quantidade">Mulheres: {totalMulheres}</div>
          <div className="botoes">
            <button className="botao adicionar" onClick={adicionarMulher}>+</button>
            <button className="botao remover" onClick={removerMulher}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
