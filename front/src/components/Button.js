import styled, { css } from 'styled-components';

export default styled.button`
  height: 3.25rem; // 52px
  border: none;
  padding: 0 1rem;
  background: ${({ theme }) => theme.colors.primary.main};
  font-size: 1rem; // 16px
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 0.25rem; // 4px
  transition: background 0.2s ease-in;

  &:hover {
    background: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background: ${({ theme }) => theme.colors.primary.dark};
  }

  &[disabled] {
    background: #CCC;
    cursor: default;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

    &:hover {
    background: ${theme.colors.danger.light};
  }

  &:active {
    background: ${theme.colors.danger.dark};
  }
    `}
`;
