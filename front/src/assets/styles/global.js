import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif
 }

 body {
  background: ${({ theme }) => theme.colors.background};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.gray[900]};
}

 button {
  cursor: pointer;
 }
`;
