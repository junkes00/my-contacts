import styled, { css } from 'styled-components';

export default styled.input`
  width: 100%;
  border: none;
  background: #fff;
  border: 2px solid #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  height: 3.25rem; // 52px
  border-radius: 0.25rem; // 4px
  outline: none;
  padding: 1rem; // 16px
  font-size: 1rem; // 16px
  transition: border-color 0.2s ease-in;
  appearance: none; // dont use defualt css of OS from mobile device

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${theme.colors.danger.main};
    border-color: ${theme.colors.danger.main} !important;
  `}
`;
