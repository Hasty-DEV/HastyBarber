import { GiBeard } from "react-icons/gi";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";

const Scheduling = () => {
    return (
        <SchedulingContainer className="d-flex justify-content-center align-items-center px-4 pt-4 pb-4 rounded w-75 ">
            <div className="d-flex flex-column justify-content-center align-items-center px-1">
                <GiBeard size={30} />
                <span>Barbeiro</span>
                <hr />
                <Button variant="Link">Reagendar Serviço</Button>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center px-1">
                <FaCalendarAlt size={30} />
                <span>Data</span>
                <hr />
                <Button variant="Link">Adicionar Serviço</Button>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center px-1">
                <FaRegClock size={30} />
                <span>Hora</span>
                <hr />
                <Button variant="Link">Adicionar Obs </Button>
            </div>
        </SchedulingContainer>
    )
}

export default Scheduling;

import styled from "styled-components";
import { Button } from "react-bootstrap";
export const SchedulingContainer = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.3);

    
    @media(max-width: 768px) {
        svg {
            width: 24px;
            height: 24px;
        }
        .btn {
        font-size: .7rem;
        }
        span {
            font-size: .8rem;
        }

        hr {
            margin: 5px;
        }
    }
`;
