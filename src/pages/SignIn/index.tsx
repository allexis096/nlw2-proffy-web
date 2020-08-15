import React from 'react';

import LogoContainer from '../../components/LogoContainer';

import InputSign from '../../components/InputSign';

import purpleHeart from '../../assets/images/icons/purple-heart.svg'

import { 
  Container, 
  PageSignIn, 
  InputLogin, 
  HeaderLogin, 
  InputConfigs,
  InputRegister } from './styles';

const SignIn: React.FC = () => {
  return (
    <PageSignIn>
      <Container>
        <LogoContainer />
      </Container>
      <InputLogin>
        <HeaderLogin>
          <h2>Fazer login</h2>
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

      <InputRegister>
        <div className="register">
          <span>Não tem conta?</span>
          <a href="/">Cadastre-se</a>
        </div>
        <div>
          <span>É de graça </span>
          <img src={purpleHeart} alt="purple heart"/>
        </div>
      </InputRegister>
    </PageSignIn>
  )
}

export default SignIn;