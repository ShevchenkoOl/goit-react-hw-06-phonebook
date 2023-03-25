import styled from "styled-components";

export const List = styled.ul`
  margin-top: 30px;
  color: black;
  font-weight: 500;
  font-size: 18px;
`;

export const Item = styled.li `
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button `
  padding: 10px 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  cursor: pointer;
  color: black;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  &:focus, :hover {
   opacity: 1;
   color: #2196F3;
 }
`;