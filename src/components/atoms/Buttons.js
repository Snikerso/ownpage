import styled, { css } from 'styled-components';

export const Button = styled.button`
  width: 30px;
  height: 30px;

  ${({ edit }) =>
    edit &&
    css`
      position: absolute;
      top: 0px;
      right: 0px;
      width: 30px;
      height: 30px;
    `}
`;
