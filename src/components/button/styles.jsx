import styled from "styled-components";

export const Button = styled.button`
  color: #fff;
  width: 120px;
  height: 30px;
  margin:  3px;
  border-radius: 8px;
  background: rgb(17, 9, 152);
  background: rgb(67, 64, 254);
  background: linear-gradient(
    90deg,
    rgba(67, 64, 254, 1) 19%,
    rgba(103, 90, 247, 1) 58%,
    rgba(183, 135, 250, 1) 96%
  );
  &:hover {
    transform: scale(1.05);
    transition: ease-in-out 250ms;
  }
`;
