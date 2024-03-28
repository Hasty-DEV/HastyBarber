import { useState } from 'react';
import { LoginContainer } from "../../ui/styles/Login/Login.styles";
import Icon from "../../ui/assets/Icon.svg";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { api } from '../../api';
import { FormEvent } from "react";
import firebase from 'firebase/compat/app';
import 'firebase/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';


const Login = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleOnSubmit = (e: FormEvent) => {
    e.preventDefault();
 
  };

  const actionLoginGoogle = async () => {
    try {
      console.log('Iniciando login com o Google...');
      const result = await api.googleLogin();

      if (!result) {
        throw new Error('Erro ao efetuar login com o Google.');
      }

      console.log('Login com o Google bem-sucedido:', result);
      setUser(result.user); 
 
    } catch (error:any) {
      console.error('Erro durante o login com o Google:', error.message);
      setError('Erro durante o login com o Google. Por favor, tente novamente.');
    }
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


          <Button className="w-100 d-flex align-items-center justify-content-center p-3 mt-2" onClick={actionLoginGoogle}>
             <FontAwesomeIcon icon={faGoogle} className="me-2" />
             Login com Google
          </Button>


          <Button type="submit" variant="dark" className="w-100 p-3 bg-dark mt-2">
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
        {error && (
          <div className="text-danger mt-3">
            <p>{error}</p>
          </div>
        )}
      </Container>
    </LoginContainer>
  );
};

export default Login;
