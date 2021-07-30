import React from "react";
import styled, { css } from "styled-components";
import Layout from "@components/Layout";
import { Ul, Li } from "@components/assets/ul";

import MainFrame from "@src/components/Landing/MainFrame";
import Button from "@components/assets/button";
import { viewport, color } from "@styles/styleAsset";
const MainWrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
function Main() {
  return (
    <Layout>
      <MainWrap>
        <MainFrame title="HOME">
          <div>
            <h1>SUNRINTHON!</h1>
            <b>선린인터넷고등학교 해커톤 갤러리</b>

            <p>
              SUNRIN INTERNET HEIGHT SCHOOL <br />
              HACKATHON GALLERY
            </p>
          </div>
          <div>test3</div>
        </MainFrame>
        <MainFrame title="GALLERY" reverse>
          <div>
            <h2>Allblack's portfolio</h2>
            <p>제가 개발하거나 참여했던 활동들을 정리해봤습니다!</p>
            <Button
              css={css`
                background: ${color.personal};
                color: white;
                margin-top: 20px;
              `}
            >
              GALLERY
            </Button>
          </div>
          <div>test3</div>
        </MainFrame>
        <MainFrame title="CONTACT">
          <div>
            <Ul>
              <Li>FACEBOOK</Li>
              <Li>
                <a href="/facebook.com/sunrinhackathon">
                  facebook.com/sunrinhackathon
                </a>
              </Li>
            </Ul>
            <Ul center>
              <Li>학교</Li>
              <Li>
                [04314] 서울특별시 용산구 원효로97길 33-4 <br />
                TEL 070-713-6213, FAX 704-0960
              </Li>
            </Ul>
            <Ul center>
              <Li>학과</Li>
              <Li>
                소프트웨어 본교 3호관 4층 소프트웨어 교무실 <br />
                TEL 070-4459-9071
              </Li>
            </Ul>
          </div>
          <div>지도 추가 예정</div>
        </MainFrame>
      </MainWrap>
    </Layout>
  );
}

export default Main;
