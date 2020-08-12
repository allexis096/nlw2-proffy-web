import React from 'react';

import backgroundLogo from '../../assets/images/success-background.svg';
import LogoContainer from '../../components/LogoContainer';

import InputSign from '../../components/InputSign';

import { 
  Container, 
  PageSignIn, 
  InputLogin, 
  HeaderLogin, 
  InputConfigs } from './styles';

const SignIn: React.FC = () => {
  return (
    <PageSignIn>
      <Container>
        <img src={backgroundLogo} alt="Background"/>
        <LogoContainer />
      </Container>
      <InputLogin>
        <HeaderLogin>
          <h2>Fazer login</h2>
          <a href="/">Criar conta</a>
        </HeaderLogin>

        <InputSign name="E-mail" label="E-mail" />
        <InputSign name="Senha" label="Senha" />

        <InputConfigs>
          <div>
            <input name="checkbox" type="checkbox" />
            <label htmlFor="checkbox">Lembrar-me</label>
          </div>
          <a href="/">Esqueci minha senha</a>
        </InputConfigs>
        
        <button type="button">Entrar</button>
      </InputLogin>
    </PageSignIn>
  )
}

export default SignIn;