import {
  BackGroundImage,
  ContainerLogin,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <div>
      <BackGroundImage src="./bg.png" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo2.png" />
        </LimitedContainer>
      </ContainerLogin>
    </div>
  );
};

export default LoginScreen;
