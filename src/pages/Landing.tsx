import React from "react";
import styled from "styled-components";
import Layout from "@components/Layout";
import { Ul, Li } from "@components/assets/ul";

import MainFrame from "@src/components/Landing/MainFrame";

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
            <div>description</div>
            <h2>선린톤 갤러리</h2>
            <p>
              선린 해커톤의 역대 수상작과 대회 사진들을 확인할 수 있습니다!{" "}
              <br />
              지금 당장 가보죠! (등등의 여러 멘트)
            </p>
            <button>GALLERY</button>
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
