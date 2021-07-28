import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { color } from "@styles/styleAsset";

interface ButtonProps {
  css?: FlattenSimpleInterpolation;
}
const Button = styled.button<ButtonProps>`
  width: 100px;
  height: 30px;
  border-radius: 2px;
  font-weight: bold;
  border: none;
  background: white;
  color: ${color.personal};
  ${(props) => props.css};
  transition: all 0.5s;
  &:hover {
    border-radius: 10px;
  }
`;

Button.defaultProps = {
  css: css`
    /* color: black; */
  `,
};

export default Button;
