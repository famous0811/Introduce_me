import React, { useState, useCallback, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import Menu from "./Menu";

import { viewport, color } from "@styles/styleAsset";
import { Ul, Li } from "@components/assets/ul";
import Button from "@components/assets/button";

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
  background: ${color.personal};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  z-index: 999;
  @media screen and (max-width: ${viewport.mobile}) {
    background: ${color.personal};
    top: auto;
    bottom: 0;
    padding: 0 15px;
    & > .layoutTitle {
      font-size: 1.2rem;
    }
  }
`;
const Body = styled.article`
  margin-top: 65px;
  padding: 15px 15px 0;
  @media screen and (max-width: ${viewport.mobile}) {
    margin-top: 0;
    margin-bottom: 65px;
  }
`;

const Footer = styled.footer`
  border-top: 3px solid ${color.personal};
  padding: 10px 20px;
  margin-top: 20px;
  @media screen and (max-width: ${viewport.mobile}) {
    display: none;
  }
`;

const Link = styled.a`
  color: ${color.personal};
  font-weight: 500;
`;

const Select = styled.select<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
`;

interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}
function Layout({ children, title = "Allblack's Portfolio" }: LayoutProps) {
  const [menuShow, setMenuShow] = useState(false);
  const [latestCompetition, setLatestCompetition] = useState({
    year: new Date().getFullYear().toString(),
    title: "sunrinthon2021",
  });
  const SelectRef = useRef<HTMLSelectElement>(null);

  const MoveToYear = useCallback((e) => {
    const topos = document.getElementById("gallery" + e.target.value);
    if (!topos) return;
    // menu height 65px;
    window.scrollTo({
      top: topos.offsetTop - 65,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const showModal = useCallback(() => {
    setMenuShow(!menuShow);
  }, [menuShow]);

  useEffect(() => {
    if (!SelectRef.current) return;

    const select = SelectRef.current;
    const allpostions: { value: string; postion: number }[] = [];

    for (const test of select.options) {
      const pos = document.getElementById("gallery" + test.value);
      if (!pos) break;
      allpostions.push({
        value: test.value.toString(),
        postion: pos.offsetTop - 65,
      });
    }

    window.addEventListener("scroll", () => {
      // window.pageYOffset
      for (const test of allpostions) {
        if (test.postion <= window.pageYOffset) {
          select.value = test.value;
        }
      }
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Menu
        show={menuShow}
        latestCompetition={latestCompetition}
        closeModal={showModal}
      />
      <Header>
        <h1 className="layoutTitle">Allblack's Portfolio</h1>
        <Button onClick={showModal}>menu</Button>

        <Select
          name=""
          onChange={MoveToYear}
          ref={SelectRef}
          show={window.location.pathname === "/gallery"}
        >
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </Select>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <ul>
          <li>copyright 🅒 2021</li>
          <li>
            <Ul>
              <Li>github</Li>
              <Li>
                <Link href="http://github.com/famous0811">
                  http://github.com/famous0811
                </Link>
              </Li>
            </Ul>
          </li>
          <li>
            <Ul>
              <Li>blog</Li>
              <Li>
                <Link href="https://allblack0811.tistory.com">
                  https://allblack0811.tistory.com
                </Link>
              </Li>
            </Ul>
          </li>
        </ul>
      </Footer>
    </>
  );
}

export default Layout;
