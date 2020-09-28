import React, { useCallback, useState } from 'react';

import LogoContainer from '../../components/LogoContainer';
import InputSign from '../../components/InputSign';

import backIcon from '../../assets/images/icons/back.svg';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';

import { 
  Container, 
  PageSignUp, 
  InputLogin, 
  HeaderLogin, 
  SignUpPage } from './styles';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  const [passShown, setPassShown] = useState(true);

  const togglePasswordShown = useCallback(() => {
    setPassShown(passShown ? false : true);
  }, [passShown])

  return (
    <PageSignUp>
      
      <SignUpPage>
        <InputLogin>
          <HeaderLogin>
            <Link to="/signin">
              <img src={backIcon} alt="back to signin"/>
            </Link>
            <h2>Cadastro</h2>
            <p>Preencha os dados abaixo para começar</p>
          </HeaderLogin>

          <InputSign name="name" label="Nome" />
          <InputSign name="supername" label="Sobrenome" />
          <InputSign name="email" label="E-mail" />

          <InputSign name="senha" label="Senha" type={passShown ? 'password': 'text' } />
          <span className="togglePassword" onClick={togglePasswordShown}>
            {passShown 
              ? <MdVisibilityOff size={20} />
              : <MdVisibility size={20} />
            }
          </span>
          
          <button type="button">Concluir cadastro</button>
        </InputLogin>
      </SignUpPage>

      <Container>
        <LogoContainer />
      </Container>

    </PageSignUp>
  )
}

export default SignUp;