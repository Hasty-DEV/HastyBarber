import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";

const baseURL = "http://localhost:3001/";

const Dashboard = () => {
    const [data, setData] = useState<any>();

    useEffect(() => {
        axios.get(baseURL)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setData(null); 
            });
    }, []);

    return (
        <DashboardContainer>
            <Container>
                <div className="d-flex flex-column align-items-center justify-content-center">
                    <h2 className="fw-bold mt-3 text-start w-75">Próximo Agendamento</h2>
                    {data ? <Scheduling /> : <ScheduleService />}
                    <Calendar />
                </div>
            </Container>
            <Container fluid>
                <BottomNavbar />
            </Container>
        </DashboardContainer>
    );
};

export default Dashboard;


import styled from "styled-components";
import Scheduling from "../../ui/partials/Scheduling/Scheduling";
import ScheduleService from "../../ui/partials/ScheduleService/ScheduleService";
import Calendar from "../../ui/partials/Calendar/Calendar";
import BottomNavbar from "../../ui/partials/BottomNavbar/BottomNavbar";

export const DashboardContainer = styled.main`
    height: 100vh;
    width: 100vw;

    hr {
        width: 100%; 
    }
`;

