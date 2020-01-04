import styled from 'styled-components';

export const Preview = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-direction: column;
  transition: 0.2s ease;
  flex: 1 0 25%;

  @media (max-width: ${({ theme }) => theme.ipadWidth}) {
    flex: 1 0 50%;
  }

  h4 {
    margin-top: 0;
    text-transform: uppercase;
  }
  img {
    padding: 10px;
    width: 100%;
    object-fit: contain;
  }

  .title {
    opacity: 0.5;
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
    .title {
      opacity: 1;
    }
  }
`;
