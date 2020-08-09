import React from 'react';

import backgroundLogo from '../../assets/images/success-background.svg';
import LogoContainer from '../../components/LogoContainer';

import InputSign from '../../components/InputSign';

import { Container, PageSignIn, InputLogin } from './styles';

const SignIn: React.FC = () => {
  return (
    <PageSignIn>
      <Container>
        <img src={backgroundLogo} alt="Background"/>
        <LogoContainer />
      </Container>
      <InputLogin>
        <InputSign name="E-mail" label="E-mail" />
        <InputSign name="Senha" label="Senha" />
      </InputLogin>
    </PageSignIn>
  )
}

export default SignIn;