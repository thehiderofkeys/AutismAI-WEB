import styled from 'styled-components';

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 10px 0 0 0;
  background-color:  #242e4c;
  color: white;
`;

export const IconImage = styled.img`
  width: 35px;
  margin: 0 15px 0 0;
`;

export const SmallText = styled.span`
  text-decoration: none;
  font-size: 15px;
  color: white;
  &:hover{
    text-decoration: none;
    color: white;
  }
`;

export const BigText = styled.div`
  font-size: 25px;
`;
