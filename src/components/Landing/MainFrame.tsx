import React from "react";
import styled, { css } from "styled-components";
import { color, viewport } from "@styles/styleAsset";
const InterduceWrap = styled.div<reserved>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 5px 0;
  /* 나중에 이걸로 변환 */
  /* height: 100%;
  max-height: 500px; */
  height: 500px;
  overflow: hidden;
  @media screen and (max-width: ${viewport.mobile}) {
    /* 나중에 이걸로 변환 */
    /* max-height: 650px; */
    height: 650px;
  }
  ${({ reverse }) =>
    reverse &&
    css`
      align-items: flex-end;
    `}
`;

const InterduceTitle = styled.h2`
  display: flex;
  /* border: 1px solid ${color.personal}; */
  border-bottom: none;
  margin: 0;
  width: 100%;
  max-width: 40%;
  padding: 10px 30px;
  background: ${color.personal};
  @media screen and (max-width: ${viewport.mobile}) {
    max-width: 100%;
  }
`;

const InterduceBody = styled.div<reserved>`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  height: 100%;
  ${({ reverse }) =>
    reverse &&
    css`
      flex-flow: row-reverse wrap;
    `}
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid ${color.personal};
  }
  & > :first-child {
    max-width: 40%;
  }
  & > :last-child {
    border-left: none;
    max-width: 60%;
    ${({ reverse }) =>
      reverse &&
      css`
        border-right: none;
        border-left: 1px solid ${color.personal};
      `}
    @media screen and (max-width: ${viewport.mobile}) {
      border: 1px solid ${color.personal};
    }
  }
  @media screen and (max-width: ${viewport.mobile}) {
    flex-flow: column-reverse wrap;
    & > div {
      max-width: 100% !important;
    }
  }
`;

interface reserved {
  reverse?: boolean;
}
interface InterduceProps extends reserved {
  title: string;
  children: React.ReactNode;
}
function Interduce({ title, reverse, children }: InterduceProps) {
  return (
    <InterduceWrap reverse={reverse} className="Interduce_wrap">
      <InterduceTitle className="Interduce_title">{title}</InterduceTitle>
      <InterduceBody reverse={reverse} className="Interduce_body">
        {children}
      </InterduceBody>
    </InterduceWrap>
  );
}

export default Interduce;
