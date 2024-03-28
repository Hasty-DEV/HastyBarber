import styled from "styled-components";

export const LoginContainer = styled.main`
  height: 100vh;
  background: linear-gradient(to bottom, #ffffff, #f0f0f0);
  h2 {
    font-weight: bold;
  }

  button {
    border: none;
    outline: none;
  }

  .register-link {
    margin-left: 5px;
  }

  .google-login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #DB4437;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
  }
  
  .google-login-btn:hover {
    background-color: #c1351e;
  }
  
  .google-login-icon {
    margin-right: 10px;
  }

`;
