import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ScheduleService = () => {
    return (
        <div className="pt-4 d-flex flex-column justify-content-center align-items-center h-100 w-100">
            <h2>Não tem Horário Agendado?</h2>
            <Link to="/schedule">
                <Button> Clique Aqui</Button>
            </Link>
        </div>
    )
}

export default ScheduleService;