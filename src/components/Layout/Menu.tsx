import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { color, viewport } from "@styles/styleAsset";

const MenuWrap = styled.div<MenuShow>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  background: none;

  ${({ show }) =>
    show &&
    css`
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      animation: appear 1s forwards;
      @keyframes appear {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
    `}

  &>div {
    width: 100%;
    overflow: hidden;
    height: 0px;
    ${({ show }) =>
      show &&
      css`
        animation: heightates 0.7s forwards;
        @keyframes heightates {
          100% {
            height: 200px;
          }
        }
      `}
  }
`;

const MenuBody = styled.div`
  position: absolute;
  top: 65px;
  left: 0;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: ${viewport.mobile}) {
    top: auto;
    bottom: 65px;
  }
`;

const MenuFooter = styled.div`
  border-top: 3px solid ${color.personal};
`;

interface MenuShow {
  show: boolean;
}

interface MenuProps extends MenuShow {
  latestCompetition: {
    year: string;
    title: string;
  };
  closeModal: () => void;
}

function Menu({ latestCompetition, show, closeModal }: MenuProps) {
  return (
    <MenuWrap show={show} onClick={closeModal}>
      <MenuBody onClick={(e) => e.stopPropagation()}>
        <Link to="/">home</Link>
        <Link to="/gallery">gallery</Link>
        <Link to={"/gallerydetails/" + latestCompetition.year}>
          {latestCompetition.title}
        </Link>
        <MenuFooter>선린인터넷고등학교선린 해커톤 갤러리</MenuFooter>
      </MenuBody>
    </MenuWrap>
  );
}

export default Menu;
