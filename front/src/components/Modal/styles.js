import styled from 'styled-components';

export const Overlay = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);

  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 28.125rem; // 450px

  background: #fff;
  border-radius: 4px;
  padding: 1.5rem; // 24px
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  h1 {
    font-size: 1.375rem; // 22px
    color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.gray[900])};
  }

  p {
    margin-top: 0.5rem; // 8px
  }
`;

export const Footer = styled.footer`
  margin-top: 2rem; // 32px
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    font-size: 1rem; // 16px
    margin-right: 0.5rem; // 8px
    color: ${({ theme }) => theme.colors.gray[200]};
  }

`;
