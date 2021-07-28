import React, { useState } from "react";
import Layout from "@components/Layout";
import GalleryFrame from "@components/gallery/GalleryFrame";

const Gallery: React.FC = () => {
  const [HecathonImpro, setHecathonImpro] = useState([
    {
      schedule: "2021.07.18-19",
      contest: {
        episode: 7,
        year: 2021,
        introduce:
          "이 대회는 2021년 7월에 시작한 대회로써 어쩌구 저쩌구 이러쿵 저러쿵",
      },
      theme: "태마",
      concept: "컨셉",
    },
    {
      schedule: "2020.07.18-19",
      contest: {
        episode: 7,
        year: 2020,
        introduce:
          "이 대회는 2020년 7월에 시작한 대회로써 어쩌구 저쩌구 이러쿵 저러쿵",
      },
      theme: "태마",
      concept: "컨셉",
    },
    {
      schedule: "2019.07.18-19",
      contest: {
        episode: 7,
        year: 2019,
        introduce:
          "이 대회는 2019년 7월에 시작한 대회로써 어쩌구 저쩌구 이러쿵 저러쿵",
      },
      theme: "태마",
      concept: "컨셉",
    },
  ]);
  return (
    <Layout>
      {HecathonImpro.map((data, index) => {
        return <GalleryFrame {...data} key={index} />;
      })}
    </Layout>
  );
};

export default Gallery;
