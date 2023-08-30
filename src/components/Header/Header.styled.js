import { styled } from 'styled-components';

export const HeaderEl = styled.header`
  ul {
    display: flex;
    gap: 12px;
    list-style-type: none;
  }

  a {
    display: block;
    text-decoration: none;
    color: #111111;
  }

  .active {
    color: #e42828;
  }
`;
