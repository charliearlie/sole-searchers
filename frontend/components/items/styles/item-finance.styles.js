import styled from 'styled-components';

export const Price = styled.span`
  font-weight: bold;
`;

export const Credit = styled.a`
  color: ${({ theme }) => theme.softBlue};
  cursor: pointer;
  font-size: 12px;
  text-decoration: underline;
`;
