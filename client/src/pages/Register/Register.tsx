import React, { useState, FormEvent } from "react";
import { Button, Container, Form, FormCheck } from "react-bootstrap";
import { RegisterContainer } from "../../ui/styles/Register/Register.styles";
import { Link, useNavigate } from "react-router-dom";
import Icon from "../../ui/assets/Icon.svg";
 
import { auth } from "../../api";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
 

const Register: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
 
  const navigate = useNavigate()

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password || !termsAccepted) {
      toast.error("Por favor, preencha todos os campos e aceite os termos e condições.");
      return;
    }

    try {
      const userCredential  = await createUserWithEmailAndPassword(auth ,email, password);

      if (userCredential !== undefined) {
        toast.success("Registro bem-sucedido!");
      }
      navigate("/login")
    } catch (error) {
      toast.error("Erro ao registrar: " + (error as Error).message);
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
              type="email"
              placeholder="E-mail"
              className="w-100 p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <Form.Control
              type="password"
              placeholder="Senha"
              className="w-100 p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 w-100">
            <FormCheck
              type="checkbox"
              label="Aceito os Termos e Condições"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 p-3 bg-light text-dark"
            onClick={handleSignUp}
          >
            Registrar-se
          </Button>
        </Form>
        <div className="text-center mt-3">
          <Form.Text>Já tem uma conta?
            <Link to="/login" className="login-link">
              Faça Login
            </Link>
          </Form.Text>
        </div>
      </Container>
      <ToastContainer />
    </RegisterContainer>
  );
};

export default Register;
