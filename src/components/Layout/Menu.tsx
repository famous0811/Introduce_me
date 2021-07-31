import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { color, viewport } from "@styles/styleAsset";

const MenuWrap = styled.div<MenuShow>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  @media screen and (max-width: ${viewport.mobile}) {
    top: auto;
    bottom: 0;
  }
  background: none;
  transition: background 1.5s;
  ${({ show }) =>
    show
      ? css`
          height: 100%;
          @keyframes appearWrap {
            0% {
              opacity: 0;
            }
            100% {
              background: rgba(0, 0, 0, 0.5);
              opacity: 1;
            }
          }
          animation: appearWrap 0.5s forwards;
        `
      : css`
          @keyframes disappearWrap {
            0% {
              background: rgba(0, 0, 0, 0.5);
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              height: 0;
            }
          }
          animation: disappearWrap 2s forwards;
        `}
  & > .menuBody {
    width: 100%;
    overflow: hidden;
    ${({ show }) =>
      show
        ? css`
            @keyframes appearBody {
              0% {
                height: 0px;
              }
              100% {
                height: 200px;
              }
            }
            animation: appearBody 0.7s forwards;
          `
        : css`
            @keyframes disappearBody {
              0% {
                height: 200px;
              }
              100% {
                height: 0px;
              }
            }
            animation: disappearBody 0.7s forwards;
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
  overflow: hidden;
  @media screen and (max-width: ${viewport.mobile}) {
    top: auto;
    bottom: 65px;
    flex-direction: column-reverse;
  }
  & > .menuPageNation {
    font-weight: bold;
    color: black;
    margin: 15px 0;
    padding: 0 7px;
    width: fit-content;
    transition: color 0.5s;
    &:hover {
      color: ${color.personal};
    }
  }
`;

const MenuFooter = styled.div`
  border-top: 3px solid ${color.personal};
  font-weight: 600;
  padding: 15px 10px;
  @media screen and (max-width: ${viewport.mobile}) {
    border-top: none;
    border-bottom: 3px solid ${color.personal};
  }
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
    <MenuWrap show={show} onClick={closeModal} className="menuWrap">
      <MenuBody onClick={(e) => e.stopPropagation()} className="menuBody">
        <Link to="/" className="menuPageNation">
          Home
        </Link>
        <Link to="/gallery" className="menuPageNation">
          Gallery
        </Link>
        <Link
          to={"/activitys/" + latestCompetition.year}
          className="menuPageNation"
        >
          {latestCompetition.title + latestCompetition.year}
        </Link>
        <MenuFooter>Allblack's 갤러리</MenuFooter>
      </MenuBody>
    </MenuWrap>
  );
}

Menu.defaultProps = {
  latestCompetition: {
    year: new Date().getFullYear().toString(),
    title: "Allblack's  ",
  },
};
export default Menu;
