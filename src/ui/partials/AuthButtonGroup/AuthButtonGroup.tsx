import { Button } from "react-bootstrap";
import { AuthButtonGroupContainer } from "../../styles/AuthButtonGroup/AuthButtonGroup.styles";
import { Link } from "react-router-dom";

const AuthButtonGroup = () => {
  return (
    <AuthButtonGroupContainer>
      <Link to="/login">
        <Button className="mb-2 w-100 p-3 bg-dark">Login</Button>
      </Link>
      <Link to="/register">
        <Button className="mb-2 w-100 p-3 bg-light text-dark">Register</Button>
      </Link>
      <Link to="/app">Continuar Como Convidado</Link>
    </AuthButtonGroupContainer>
  );
};

export default AuthButtonGroup;
