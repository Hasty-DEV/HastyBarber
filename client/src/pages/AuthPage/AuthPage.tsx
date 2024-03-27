import { AuthPageContainer } from "../../ui/styles/AuthPage/AuthPage.styles";
import { Container } from "react-bootstrap";
import Icon from "../../ui/assets/Icon.svg";
import AuthButtonGroup from "../../ui/partials/AuthButtonGroup/AuthButtonGroup";

const AuthPage = () => {
  return (
    <main>
      <AuthPageContainer className="d-flex flex-column align-items-center justify-content-center">
        <img src={Icon} alt="" className="img-fluid mb-1" width={200} />
        <Container className="text-center">
          <h1 className="display-4 text-center">
            Reserve seu Corte de Cabelo em Segundos
          </h1>
          <p>
            Agende seu próximo corte de cabelo em alguns segundos.
          </p>
          <AuthButtonGroup />
        </Container>
      </AuthPageContainer>
    </main>
  );
};

export default AuthPage;



