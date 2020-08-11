import styled from 'styled-components';

export const PageSignIn = styled.div`
  @media (min-width: 1100px) {
    width: 100vw;
    height: 100vh;
    display: flex;
  }
`;

export const HeaderLogin = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4.0rem 3.0rem 2.0rem;

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
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100vw;
  height: 50vh;
  background: var(--color-primary);

  img {
    width: 100%;
  }

  > div {
    margin-top: -33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h2 {
      color: var(--color-text-in-primary);
      max-width: 300px;
    }
  }

  @media (min-width: 1100px) {
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

export const InputLogin = styled.div`
  height: 50vh;

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

  @media (min-width: 1100px) {
    margin: 130px auto 0;
  }
`;

export const InputConfigs = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.0rem 3.0rem 3.0rem;
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
  }
`;