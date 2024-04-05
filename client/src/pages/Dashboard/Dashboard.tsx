import { Button, Container } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { GiBeard } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const Dashboard = () => {
    const location = useLocation();
    const userData = location.state.userData;

    return (
        <DashboardContainer>
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center ">
                    <h2 className="fw-bold mt-3 text-start w-75">Próximo Agendamento</h2>
                    <SchedulingContainer className="d-flex justify-content-center align-items-center px-4 pt-4 pb-4 rounded w-75 ">
                        <div className="d-flex flex-column justify-content-center align-items-center px-2">
                            <GiBeard size={30} />
                            <span>Barbeiro</span>
                            <hr />
                            <Button variant="Link">Reagendar</Button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center px-2">
                            <FaCalendarAlt size={30} />
                            <span>Data</span>
                            <hr />
                            <Button variant="Link">Adicionar Serviço</Button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center px-2">
                            <FaRegClock size={30} />
                            <span>Hora</span>
                            <hr />
                            <Button variant="Link">Adicionar Obs</Button>
                        </div>
                    </SchedulingContainer>
                    {userData ? (
                        <div>
                            <p>Olá, {userData.displayName}</p>
                            <img src={userData.photoURL} alt="Foto do usuário" />
                        </div>
                    ): null}
                </div>
            </Container>
        </DashboardContainer>
    )
}

export default Dashboard;


import styled from "styled-components";

export const DashboardContainer = styled.main`
    hr {
        width: 100%; 
    }
`;

export const SchedulingContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);
`;