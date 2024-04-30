import React from "react";

class Relogio extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hora: this.obterHoraAtual() };
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState({ hora: this.obterHoraAtual() });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    obterHoraAtual() {
        const horaAtual = new Date();
        const horaBrasilia = new Date(
            horaAtual.toLocaleString("en-US", {
                timeZone: "America/Sao_Paulo"
            })
        );
        return {
            hora: horaBrasilia.toLocaleTimeString("pt-BR", {
                timeZone: "America/Sao_Paulo"
            }),
            data: horaBrasilia.toLocaleDateString("pt-BR", {
                timeZone: "America/Sao_Paulo"
            })
        };
    }

    render() {
        return (
            <div className="Index">
                <header className="Index-header">
                    <div>
                        <p>RELÓGIO - Horário: {this.state.hora.hora}</p>
                        <p>DATA - DD/MM/AAAA: {this.state.hora.data}</p>
                    </div>
                </header>
            </div>
        );
    }
}

export default Relogio;
