import React from 'react';

import logoImg from '../../assets/images/logo.svg';


import { Container } from './styles';

const LogoContainer: React.FC = () => {
  return (
    <Container>
      <img src={logoImg} alt="Proffy"/>
      <h2>Sua plataforma de estudos online</h2>
    </Container>
  )
}

export default LogoContainer;