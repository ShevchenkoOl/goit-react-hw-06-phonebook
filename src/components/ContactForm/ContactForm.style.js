import styled from 'styled-components';

export const Form = styled.form `
  margin-top: 10px;
  margin-bottom: 30px;
`;


export const Label = styled.label `
  display: block;
  margin-bottom: 20px;
  
  font-weight: 500;
  font-size: 20px;
`;

export const Input = styled.input `
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 10px;
  width: 100%;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;

// .input:focus {
//   outline-color: var(--accentColor);
// }

export const Button = styled.button `
  padding: 10px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
  color: #00000;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
`;

// .btn:hover {
//   opacity: 1;
// }
