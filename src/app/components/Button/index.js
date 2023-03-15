import styled, { css } from "styled-components";

export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
