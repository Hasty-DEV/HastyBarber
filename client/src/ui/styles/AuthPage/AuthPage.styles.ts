import styled from "styled-components";
import AuthImage from "../../assets/Image.png";

export const AuthPageContainer = styled.div`
  height: 100vh;
  background-image: url(${AuthImage});
  background-size: contain;
  background-repeat: no-repeat;

  h1 {
    font-weight: bold;
  }
`;
