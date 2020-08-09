import styled from 'styled-components';

export const InputBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  & + div {
    margin-top: 1.4rem;
  }

  label {
    color: var(--color-text-complement);
    position: absolute;
    left: 50px;
    top: 25px;
    font-size: 1.4rem;
  }

  input {
    width: 90%;
    height: 5.6rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
  }

  :focus-within::after {
    width: calc(100% - 6.8rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 3.4rem;
    right: 3.4rem;
    bottom: 0;
  }
`;