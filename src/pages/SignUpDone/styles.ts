import styled from 'styled-components';

import backgroundLogo from '../../assets/images/success-background.svg';

export const Container = styled.div`
  width: 100vw;

  background: url(${backgroundLogo});
  background-size: 100%;
  background-color: var(--color-primary);
`;

export const DonePage = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;

  color: var(--color-title-in-primary);


  h1 {
    font: 700 4rem Arquivo;
    padding: 2.2rem 0;
  }

  a {
    text-decoration: none;

    button {
      margin-top: 6rem;
      padding: 2rem 3rem;
      border: none;
      border-radius: 8px;
      background: var(--color-secundary);
      color: var(--color-title-in-primary);
      font: 700 1.6rem Arquivo;
      cursor: pointer;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        background: var(--color-secundary-dark);
      }
    }
  }
`;

export const TextExperience = styled.div`
  line-height: initial;
  text-align: center;
`;