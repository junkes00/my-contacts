import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem; // 32px
  position: relative;
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    background: #fff;
    border: none;
    border-radius: 1.562rem; // 25px
    height: 3.125rem; // 50px
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: 0;
    padding: 0 1rem;

  &::placeholder {
    color: #BCBCBC;
  }
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem; // 32px

  strong {
    font-size: 1.5rem; // 24px
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.colors.primary.main};
      color: #fff;
    }
  }
`;

export const ListHeader = styled.header`
  margin-top: 1.5rem; // 24px

  margin-bottom: 0.5rem; // 8px

  button {
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      margin-right: 0.5rem; // 8px
      font-weight: bold;
      color: ${({ theme }) => theme.colors.primary.main}
    }
  }

  img {
    transform: ${({ orderBy }) => (orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.3s ease-in;
  }
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 1rem;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & + & { // quando houver um elemento card seguido por outro elemento card, seta 1rem
    margin-top: 1rem;
  }

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.colors.primary.lighter};
        color: ${({ theme }) => theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 0.875rem; // 14px
      color: ${({ theme }) => theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 0.5rem; // 8px
    }
  }
`;
