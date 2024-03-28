import { Button, Container, Form } from "react-bootstrap";
import { RegisterContainer } from "../../ui/styles/Register/Register.styles";
import { Link } from "react-router-dom";
import Icon from "../../ui/assets/Icon.svg";
import {  useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../services/FirebaseConfig/FirebaseConfig";

const Register = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    createUserWithEmailAndPassword,
    loading,
  ] = useCreateUserWithEmailAndPassword(auth);



  const handleSingOut = (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    createUserWithEmailAndPassword(email, password);

    if (loading) {
      return <p>carregando...</p>
    }
  };
  return (
    <RegisterContainer>
      <Container className="p-4">
        <div className="d-flex justify-content-center align-items-center mb-2">
          <Link to="/">
            <img src={Icon} alt="" className="img-fluid" width={150} />
          </Link>
        </div>
        <h2 className="text-center mb-4">Registre-se</h2>
        <Form className="w-100">
          <Form.Group className="mb-3 w-100">
            <Form.Control
              type="text"
              placeholder="Nome Completo"
              className="w-100 p-3"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Control
              type="email"
              placeholder="E-mail"
              className="w-100 p-3"
              onChange={e => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Control
              type="password"
              placeholder="Senha"
              className="w-100 p-3"
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Control
              type="text"
              placeholder="Telefone"
              className="w-100 p-3"
            />
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Check type="checkbox" label="Aceito os Termos e Condições" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 p-3 bg-light text-dark"
            onClick={handleSingOut}
          >
            Registrar-se
          </Button>
        </Form>
        <div className="text-center mt-3">
          <Form.Text>Já Conta?
            <Link to="/login" className="login-link">
              Faça Login
            </Link>
          </Form.Text>
        </div>
      </Container>
    </RegisterContainer>
  );
};

export default Register;
