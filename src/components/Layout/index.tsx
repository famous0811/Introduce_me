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

const Select = styled.select<{ show: boolean }>`
  display: ${({ show }) => (show ? "block" : "none")};
`;
interface LayoutProps {
  children?: React.ReactNode;
  title?: string;
}
function Layout({ children, title = "SunrinThonGallery" }: LayoutProps) {
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
          <option value="2018">2018</option>
        </Select>
      </Header>
      <Body>{children}</Body>
      <Footer>
        <ul>
          <li>copyright 🅒 SUNRINTON STAFF</li>
          <li>CONACT</li>

          <ul style={{ marginLeft: "20px" }}>
            <li>
              <Ul>
                <Li>학교</Li>
                <Li>[04314] 서울특별시 용산구 원효로97길 33-4</Li>
                <Li>TEL 070-713-6213,FAX 704-0960</Li>
              </Ul>
            </li>
            <li>
              <Ul>
                <Li>학과</Li>
                <Li>소프트웨어 본교 3호관 4층 소프트웨어 교무실</Li>
                <Li>TEL 070-4459-9071</Li>
              </Ul>
            </li>
          </ul>

          <li>
            <Ul>
              <Li>DEVELOPERS</Li>
              <Li>2021 SUNRINTHON WEB_DEVELOPERS(염태민/이호준/유명환)</Li>
            </Ul>
          </li>
          <li>
            <Ul>
              <Li>WEB_CONTACT</Li>
              <Li>깃</Li>
              <Li>깃</Li>
              <Li>깃</Li>
            </Ul>
          </li>
        </ul>
      </Footer>
    </>
  );
}

export default Layout;
