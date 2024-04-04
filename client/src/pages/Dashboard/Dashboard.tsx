import { Container } from "react-bootstrap"

const Dashboard = () => {
    return (
        <main>
            <Container>
                <h2>Próximo Agendamento</h2>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="d-flex flex-column justify-content-center align-items-center px-2">
                        <i>I</i>
                        <span>Barbeiro</span>
                        <button>Reagendar</button>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center px-2">
                        <i>I</i>
                        <span>Data</span>
                        <button>Adicionar Serviço</button>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center px-2">
                        <i>I</i>
                        <span>Hora</span>
                        <button>Adicionar Obs</button>
                    </div>
                </div>
            </Container>
        </main>
    )
}

export default Dashboard

import styled from "styled-components";
|