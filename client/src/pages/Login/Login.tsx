import { useState, FormEvent } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { LoginContainer } from "../../ui/styles/Login/Login.styles";
import Icon from "../../ui/assets/Icon.svg";
import { Button, Container, Form, FormCheck } from "react-bootstrap";
import { api } from '../../api';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

interface UserData {
  id: string;
  displayName: string | null;
  photoURL: string | null;
}

const Login = () => {
  const [, setUser] = useState<firebase.User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();  

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!email ||!password) {
      toast.error('Por favor, preencha todos os campos.');
      return;
  }

  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    if (userCredential !== undefined) {
      toast.success("Login bem-sucedido!");
      setTimeout(() => navigate('/dashboard'), 3000); 

    }
  } catch (error) {
    toast.error('Email/Senha incorreta');
  }
};

  const actionLoginGoogle = async (): Promise<UserData | null> => {
    try {
      console.log('Iniciando login com o Google...');
      const result = await api.googleLogin();

      if (!result || !result.user) {
        throw new Error('Erro ao efetuar login com o Google.');
      }

      console.log('Login com o Google bem-sucedido:', result);

      const userData: UserData = {
        id: result.user.uid,
        displayName: result.user.displayName,
        photoURL: result.user.photoURL
      };

      setUser(result.user);
      navigate('/dashboard', { state: { userData } });  
      return userData;

    } catch (error:any) {
      console.error('Erro durante o login com o Google:', error.message);
      setError('Erro durante o login com o Google. Por favor, tente novamente.');
      return null;
    }
  };


  return (
    <LoginContainer className="d-flex flex-column align-items-center p-5">
      <Link to="/">
        <img src={Icon} alt="" className="img-fluid pt-5" width={150} />
      </Link>
      <h2 className="display-5 mt-3">Bem-Vindo de Volta!</h2>
      <Container>
        <Form className="pt-5 w-100" onSubmit={(e) => handleLogin(e)}>
          <Form.Group className="mb-3 w-100">
            <Form.Control
              type="text"
              placeholder="E-mail"
              className="w-100 p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              placeholder="Senha"
              className="w-100 p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      <ToastContainer />
    </LoginContainer>
  );
};

export default Login;
