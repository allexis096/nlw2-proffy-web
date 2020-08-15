import styled from 'styled-components';
import backgroundLogo from '../../assets/images/success-background.svg';

export const PageSignIn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

    input {
      width: 400px;
    }
  }
`;

export const HeaderLogin = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 3.0rem 2.0rem;

  h2 {
    color: var(--color-text-title);
    font-size: 3.4rem;
  }

  a {
    color: var(--color-primary);
    text-decoration: none;

    &:hover {
      color: var(--color-primary-dark);
    }
  }

  @media (min-width: 1024px) {
    padding: 3rem 0;

    a {
      position: absolute;
      bottom: 50px;
      font-weight: bold;
    }
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 50vh;
  
  background-image: url(${backgroundLogo});
  background-size: 100%;
  background-color: var(--color-primary);

  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: var(--color-text-in-primary);
    max-width: 300px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    width: 768px;
    height: 100vh;

    img {
      width: 100%;
    }

    > div {
      width: 50%;
      margin-left: 24%;
      margin-top: -180px;

      h2 {
        max-width: 320px;
      }
    }
  }
`;

export const InputLogin = styled.section`
  button {
    width: 90%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.8rem;
    cursor: pointer;
    font: 700 1.6rem Arquivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color 0.2s;
    margin: 0 auto;
    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 1024px) {
    margin: 130px auto 0;

    label {
      left: 25px;
    }

    button {
      width: 100%;
    }
  }
`;

export const InputConfigs = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3.0rem;
  color: var(--color-text-complement);

  div {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    
    input {
      margin-right: 0.6rem;
      width: 20px;
      height: 20px;
    }
  }

  a {
    color: var(--color-text-complement);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (min-width: 1024px) {
    padding: 3rem 0;

    a {
      font-size: 1.4rem;
    }
  }
`;

export const InputRegister = styled.footer`
  padding: 2rem 3rem;
  display: flex;
  justify-content: space-between;

  .register {
    display: flex;
    flex-direction: column;

    a {
      font-weight: bold;
      color: var(--color-primary);

      :hover {
        color: var(--color-primary-dark);
      }
    }
  }
`;
