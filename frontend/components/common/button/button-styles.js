import styled from 'styled-components';

export const Button = styled.button`
  padding: ${props =>
    props.padding ? `${props.padding}px` : theme.spacingUnit};
  font-size: 1.6rem;
  font-weight: bold;
  color: black;
  border: 0;
  border-radius: ${props =>
    props.borderRadius >= 0 ? `${props.borderRadius}px` : '2px'};
  outline: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  min-width: 100px;
  cursor: pointer;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);
  }
  &:active {
    box-shadow: none;
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.orange};
  color: white;
`;

export const SecondaryButton = styled(Button)`
  background-color: #000;
  color: white;
`;

export const LinkButton = styled.button`
  display: inline;
  padding: 0;
  background-color: transparent;
  border-color: transparent;
  color: blue;
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.darkGreyishCyan};
  }
`;
