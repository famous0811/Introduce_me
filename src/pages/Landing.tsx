import React from "react";
import styled, { css } from "styled-components";
import Layout from "@components/Layout";
import { Ul, Li } from "@components/assets/ul";

import MainFrame from "@src/components/Landing/MainFrame";
import Button from "@components/assets/button";
import { color } from "@styles/styleAsset";

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
            <h1>Allblack's portfolio!</h1>
            <b>선린인터넷고등학교 해커톤 갤러리</b>
            <p>Allblack's portfolio!</p>
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
              <Li>Github</Li>
              <Li>
                <a href="http://github.com/famous0811">
                  http://github.com/famous0811
                </a>
              </Li>
            </Ul>
            <Ul>
              <Li>Blog</Li>
              <Li>
                <a href="https://allblack0811.tistory.com">
                  https://allblack0811.tistory.com
                </a>
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
