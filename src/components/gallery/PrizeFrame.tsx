import React from 'react';
import styled, { css } from 'styled-components';
import { color, viewport } from '@styles/styleAsset';

const PrizeFrameWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 650px;
  & > .prizehistory {
    background: hotpink;
    width: 100%;
    padding: 15px 40px;
  }
`;
const PrizeFrameMaterial = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > div {
    width: 100%;
    height: 100%;
    border: 1px solid ${color.personal};
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: ${viewport.mobile}) {
    flex-direction: column;
  }
`;

const PrizeFrameIntroduce = styled.div`
  display: flex;
  width: 100%;
  & > .subTitleFrame,
  & > .titleFrame {
    width: 100%;
    padding: 10px 20px;
    border: 1px solid ${color.personal};
    @media screen and (max-width: ${viewport.mobile}) {
      padding: 5px 10px;
    }
  }
`;
const PrizeFrameIntroduceSubTitleFrame = styled.div`
  & > h2 {
    padding: 0 30px;
  }
  @media screen and (max-width: ${viewport.mobile}) {
    text-align: center;
    & > h2 {
      padding: 0;
    }
  }
`;
const PrizeFrameIntroduceTitleFrame = styled.div`
  & > .title {
    display: flex;
    width: 100%;
    align-items: flex-end;
    padding: 0 30px;

    & > .teamname {
      margin-left: 20px;
    }
    @media screen and (max-width: ${viewport.mobile}) {
      flex-direction: column;
      align-items: center;
      padding: 0;
      & > .teamname {
        margin: 0;
      }
    }
  }
  & > .members {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

const PrizeFrameDiscription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${color.personal};
  padding: 10px 20px;
  & > p {
    margin-top: 10px;
  }
`;

interface PrizeFrameProps {
  prizehistory: string; // 수상 내역
  image?: string[];
  video: string;

  impormation: {
    title: string; // 작품명
    subTitle: string; // 주제
    teamName: string; // 팀명
    members: string[]; // 맴버
    discription: string; // 설명
  };
}

function PrizeFrame({
  prizehistory,
  image,
  video,
  impormation,
}: PrizeFrameProps) {
  return (
    <PrizeFrameWrap>
      <div className="prizehistory">SUNRINTHON AWORD-{prizehistory}</div>
      <PrizeFrameMaterial>
        <div>{video}</div>
        <div>images</div>
      </PrizeFrameMaterial>

      <PrizeFrameIntroduce>
        <PrizeFrameIntroduceSubTitleFrame className="subTitleFrame">
          <span>SUB-TITLE</span>
          <h2>{impormation.subTitle}</h2>
        </PrizeFrameIntroduceSubTitleFrame>

        <PrizeFrameIntroduceTitleFrame className="titleFrame">
          <span>TITLE</span>
          <div className="title">
            <h2>{impormation.title}</h2>
            <div className="teamname">{impormation.teamName}</div>
          </div>
          <div className="members">
            {impormation.members.map((member, index) => {
              return (
                <div key={index} style={{ margin: '0 5px' }}>
                  {member}
                </div>
              );
            })}
          </div>
        </PrizeFrameIntroduceTitleFrame>
      </PrizeFrameIntroduce>

      <PrizeFrameDiscription>
        <span>DISCRIPTION</span>
        <p>{impormation.discription}</p>
      </PrizeFrameDiscription>
    </PrizeFrameWrap>
  );
}

export default PrizeFrame;
