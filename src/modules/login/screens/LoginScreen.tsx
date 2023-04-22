import Input from '../../../shared/inputs/input/input';
import {
  BackGroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
} from '../styles/loginScreen.styles';

const LoginScreen = () => {
  return (
    <ContainerLoginScreen>
      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo2.png" />
          <Input />
        </LimitedContainer>
      </ContainerLogin>
      <BackGroundImage src="./bg.png" />
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
