import styled from 'styled-components';
import backgroundLogo from '../../assets/images/success-background.svg';

export const PageSignUp = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  flex-direction: column-reverse;

  @media (min-width: 1024px) {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;

    input {
      width: 350px;
    }
  }
`;

export const SignUpPage = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const HeaderLogin = styled.header`
  display: flex;
  flex-direction: column;
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
      img {
          position: absolute;
          top: 0;
        }
      }
    }

    p {
      width: 70%;
      font-size: 2.2rem;
      padding: 2rem 0;
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
    width: 50vw;
    height: 100vh;

    img {
      width: 100%;
    }

    > div {
      h2 {
        max-width: 320px;
      }
    }
  }
`;

export const InputLogin = styled.section`
  .togglePassword {
    position: absolute;
    right: 45px;
    top: 53.4rem;
  }

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
    margin: 4rem auto 2rem;
    &:hover {
      background: var(--color-secundary-dark);
    }
  }

  @media (min-width: 1024px) {
    .togglePassword {
      top: 44rem;
      left: 52rem;
    }
    
    label {
      left: 25px;
    }

    input:focus ~ label,
    input:not(:focus):valid ~ label {
      left: 20px;
    }

    button {
      width: 100%;
    }
  }
`;
