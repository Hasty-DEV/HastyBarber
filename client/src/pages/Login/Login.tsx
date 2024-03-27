import { LoginContainer } from "../../ui/styles/Login/Login.styles";
import Icon from "../../ui/assets/Icon.svg";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FormEvent } from "react";

const Login = () => {
  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <LoginContainer className="d-flex flex-column align-items-center p-5">
      <Link to="/">
        <img src={Icon} alt="" className="img-fluid pt-5" width={150} />
      </Link>
      <h2 className="display-5 mt-3">Bem-Vindo de Volta!</h2>
      <Container>
        <Form className="pt-5 w-100" onSubmit={(e) => handleOnSubmit(e)}>
          <Form.Group className="mb-3 w-100">
            <Form.Control
              type="text"
              placeholder="Nome ou Telefone"
              className="w-100 p-3"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Senha"
              className="w-100 p-3"
            />
          </Form.Group>
          <div className="text-end">
            <Form.Text>Esqueceu a senha?</Form.Text>
          </div>
          <Button type="submit" className="w-100 p-3 bg-dark mt-2">
            Login
          </Button>
        </Form>
        <div className="text-center mt-5">
          <Form.Text>Não Tem Conta? 
            <Link to="/register" className="register-link">
            Registre-se
            </Link>
          </Form.Text>
        </div>
      </Container>
    </LoginContainer>
  );
};

export default Login;
