import { styled } from 'styled-components';

export const InfoWrapper = styled.div`
  display: flex;
  gap: 16px;
  img {
    max-width: 250px;
    max-height: 350px;
  }
  p {
    max-width: 56vw;
  }
  .genres-list {
    display: flex;
    gap: 8px;
    list-style: none;
  }
`;
