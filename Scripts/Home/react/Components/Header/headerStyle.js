import styled from 'styled-components';

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;

  z-index:1;
`;

export const Logo = styled.img`
  width: 50px;
`;


export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 20px;
  &:hover{
    text-decoration: none;
  }
`;
