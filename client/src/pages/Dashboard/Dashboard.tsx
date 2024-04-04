import { Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Dashboard = () => {
    const location = useLocation();
    const userData = location.state.userData;

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
                {userData && (
                    <div>
                        <p>Olá, {userData.displayName}</p>
                        <img src={userData.photoURL} alt="Foto do usuário" />
                    </div>
                )}
            </Container>
        </main>
    )
}

export default Dashboard;
