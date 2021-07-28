import React, { useState } from 'react';
import Layout from '@components/Layout';

import PrizeFrame from '@components/gallery/PrizeFrame';
import GalleryFrame from '@components/gallery/GalleryFrame';
// import styled, { css } from 'styled-components';

function Detail() {
  const [HecathonImpro, setHecathonImpro] = useState({
    schedule: '2021.07.18-19',
    contest: {
      episode: 7,
      year: 2021,
      introduce:
        '이 대회는 2021년 7월에 시작한 대회로써 어쩌구 저쩌구 이러쿵 저러쿵',
    },
    theme: '태마',
    concept: '컨셉',
    detail: true,
    detaildata: {
      award: [
        {
          title: '개임 대상',
          teamname: '팀명',
        },
        {
          title: '생활 대상',
          teamname: '팀명',
        },
      ],
      contesttitle: '선린톤 제목',
      staff: {
        total: '총괄',
        subtotal: '부총괄',
        promoter: ['기획1', '기획2'],
        developer: ['개발1', '개발2'],
        designer: ['디자인1', '다지안2'],
      },
    },
  });

  const [prizes, setPrizes] = useState({
    prizehistory: '금상',
    video: '비디오  ',
    impormation: {
      title: '제목',
      subTitle: '부제',
      teamName: '시진핑 주석',
      members: ['test1', 'test2', 'test3'],
      discription:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat expedita deserunt culpa ea incidunt aperiam, maiores quaerat rem, quidem asperiores amet voluptates sed dolorum distinctio veritatis reprehenderit commodi corrupti nihil.',
    },
  });
  return (
    <Layout>
      <GalleryFrame {...HecathonImpro} />
      <PrizeFrame {...prizes} />
      <PrizeFrame {...prizes} />
    </Layout>
  );
}

export default Detail;
