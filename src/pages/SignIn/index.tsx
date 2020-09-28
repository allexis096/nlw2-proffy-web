import React, { useState } from 'react';

import LogoContainer from '../../components/LogoContainer';
import InputSign from '../../components/InputSign';

import purpleHeart from '../../assets/images/icons/purple-heart.svg'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { 
  Container, 
  PageSignIn, 
  InputLogin, 
  HeaderLogin, 
  InputConfigs,
  InputRegister,
  SignInPage } from './styles';

const SignIn: React.FC = () => {
  const [passShown, setPassShown] = useState(true);

  function togglePasswordShown() {
    setPassShown(passShown ? false : true);
  }

  return (
    <PageSignIn>

      <Container>
        <LogoContainer />
      </Container>
      
      <SignInPage>
        <InputLogin>
          <HeaderLogin>
            <h2>Fazer login</h2>
          </HeaderLogin>

          <InputSign name="email" label="E-mail" />
          <InputSign name="senha" label="Senha" type={passShown ? 'password': 'text' } />
          <span className="togglePassword" onClick={togglePasswordShown}>
            {passShown 
              ? <MdVisibilityOff size={20} />
              : <MdVisibility size={20} />
            }
          </span>

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
            <a href="/signup">Cadastre-se</a>
          </div>
          <div>
            <span>É de graça </span>
            <img src={purpleHeart} alt="purple heart"/>
          </div>
        </InputRegister>
      </SignInPage>
    </PageSignIn>
  )
}

export default SignIn;