import React from 'react';
import styled, { css } from 'styled-components';
import { color, viewport } from '@styles/styleAsset';

const GalleryFrameWrap = styled.div`
  height: 100%;
  width: 100%;
  max-height: 650px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: pink;
  border: 1px solid ${color.personal};
  margin-top: 20px;
  & > .schedule {
    padding: 5px 30px;
    background: yellow;
    @media screen and (max-width: ${viewport.mobile}) {
      display: none;
    }
  }
`;

const GalleryFrameImpormation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border-right: 1px solid ${color.personal};
  & > .galleryFrameTheme,
  .galleryFrameConcept {
    padding: 10px 15px;
    width: 100%;
    border-top: 1px solid ${color.personal};
  }
  & > .galleryFrameTheme > p,
  .galleryFrameConcept {
    @media screen and (max-width: ${viewport.mobile}) {
      display: none;
    }
  }
`;

const GalleryFrameItro = styled.div`
  display: flex;
  @media screen and (max-width: ${viewport.mobile}) {
    flex-direction: column;
  }
`;

const GalleryFrameImageSlick = styled.div<{ mobile?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${viewport.mobile}) {
    display: none;
  }
  ${({ mobile }) =>
    mobile &&
    css`
      display: none;
      background: blue;
      @media screen and (max-width: ${viewport.mobile}) {
        display: flex;
      }
    `}
`;

const GalleryFrameTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  & > .episode {
    font-weight: 600;
    font-size: 48px;
    padding: 10px 30px;
    @media screen and (max-width: ${viewport.mobile}) {
      font-size: 32px;
    }
  }
`;
const PrizeFrameDetailWrap = styled.div<isDetail>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ detail }) =>
    !detail &&
    css`
      display: none;
    `}
  & > div {
    width: 100%;
    padding: 10px 20px;
    @media screen and (max-width: ${viewport.mobile}) {
      padding: 5px 10px;
    }
  }
  & > .contestdetailinformation {
  }
  & > .staffinformation {
    display: flex;
    flex-direction: column;
    & > ul {
      margin-left: 20px;
    }
  }
`;
interface isDetail {
  detail?: boolean;
}

interface GalleryFrameProps {
  schedule: string; // 대회기간
  contest: {
    episode: number; // 회차
    year: number; // 해당연도
    introduce: string; // 간단한 소게
  };
  theme: string; // 태마
  concept: string; // 컨샙

  contestimages?: string[];

  detail?: boolean;

  detaildata?: {
    award: {
      // 수상작들 정보
      title: string;
      teamname: string;
    }[];

    contesttitle: string;

    staff: {
      total: string;
      subtotal: string;
      promoter: string[];
      developer: string[];
      designer: string[];
    };
  };
}

function GalleryFrame({
  schedule,
  contest,
  theme,
  concept,
  contestimages,
  detail,
  detaildata,
}: GalleryFrameProps) {
  return (
    <GalleryFrameWrap data-aos={'fade-up'} id={'gallery' + contest.year}>
      <div className="schedule">{schedule}</div>
      <GalleryFrameItro>
        <GalleryFrameImpormation>
          <GalleryFrameTitle>
            <div className="episode">{contest.episode}th</div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}>
              <span>{contest.year}</span>
              <div>제{contest.episode}선린인터넷고등학교 해커톤</div>
            </div>
          </GalleryFrameTitle>

          <GalleryFrameImageSlick className="imageSlick" mobile>
            images
          </GalleryFrameImageSlick>
          <div className="galleryFrameTheme">
            <div>theme</div>
            <span>{theme}</span>
            {/* 날려 */}
            <p>{contest.introduce}</p>
          </div>

          <div className="galleryFrameConcept">
            <div>concept</div>
            <span>{concept}</span>
          </div>
          {/* 날려 */}
          <div>
            <button>MORE...</button>
          </div>
        </GalleryFrameImpormation>
        <GalleryFrameImageSlick className="imageSlick">
          images
        </GalleryFrameImageSlick>
      </GalleryFrameItro>

      {/* detail */}
      <PrizeFrameDetailWrap detail={detail}>
        <div className="contestdetailinformation">
          <div>THE LONG AND SHORT OF IT</div>
          <div>{detaildata?.contesttitle}</div>
          <div>{contest.introduce}</div>
        </div>

        <div className="staffinformation">
          <div>STAFF</div>
          <ul>
            <li>
              총괄 / {detaildata?.staff.total} 부총괄 /{' '}
              {detaildata?.staff.subtotal}
            </li>
            <li>기획 / {detaildata?.staff.promoter}</li>
            <li>개발 / {detaildata?.staff.developer}</li>
            <li>디자인 / {detaildata?.staff.designer}</li>
          </ul>
        </div>
      </PrizeFrameDetailWrap>
    </GalleryFrameWrap>
  );
}

export default GalleryFrame;