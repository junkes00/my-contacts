import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 1rem;
  }

  small {
    color: ${({ theme }) => theme.colors.danger.main};
    font-size: 12px;
    display: block;
    margin-top: 0.5rem; // 8px
  }
`;
