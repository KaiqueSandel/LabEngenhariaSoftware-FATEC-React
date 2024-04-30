import React from "react";

class Letreiro extends React.Component {
    constructor(props) {
        super(props);
        this.state = { texto: "" };
    }

    componentDidMount() {
        this.frase = "Conheça a Fatec Presidente Prudente!";
        this.index = 0;
        this.interval = setInterval(this.atualizarLetreiro, 200);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    atualizarLetreiro = () => {
        if (this.index >= this.frase.length) {
            this.index = 0;
            this.setState({ texto: "" });
        } else {
            this.setState(prevState => ({
                texto: prevState.texto + this.frase[this.index++]
            }));
        }
    }

    render() {
        return (
            <div className="Index">
                <header className="Index-header">
                    <h1 id="letreiro">{this.state.texto}</h1>
                </header>
            </div>
        );
    }
}

export default Letreiro;
