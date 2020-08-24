import styled from 'styled-components';

export const InputBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;

  & + div {
    margin-top: 1.40rem;
  }

  label {
    color: var(--color-text-complement);
    position: absolute;
    left: 50px;
    font-size: 1.6rem;
    transition: 0.3s ease all;
  }
  
  input {
    width: 90%;
    height: 5.6rem;
    margin-top: -1.5rem;

    border-radius: 0.8rem;
    
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
    color: var(--color-text-base);
  }

  input:focus ~ label,
  input:not(:focus):valid ~ label {
    left: 40px;
    top: -15px;
    font-size: 1.4rem;
  }
  
  /* :focus-within::after {
    transform: rotate(90deg);
    width: calc(100% - 54rem);
    height: 2px;
    content: '';
    background: var(--color-primary-light);
    position: absolute;
    left: 15px;
    top: 12px;
  } */
`;