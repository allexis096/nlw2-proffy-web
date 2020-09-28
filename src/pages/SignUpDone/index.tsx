import React from 'react';

import SuccessIcon from '../../assets/images/icons/success-check-icon.svg';

import { Container, DonePage, TextExperience } from './styles';

const SignUpDone: React.FC = () => {
  return (
    <Container>
      <DonePage>
        <img src={SuccessIcon} alt="Success"/>
        <h1>Cadastro concluído</h1>
        <TextExperience>
          <p>Agora você faz parte da plataforma da Proffy.</p>
          <p>Tenha uma ótima experiência.</p>
        </TextExperience>
        <a href="/signin"><button type="button">Fazer login</button></a>
      </DonePage>
    </Container>
  );
};

export default SignUpDone;
