import { Grid, Headline2, Headline3, Row, Col } from '@class101/ui';
import React from 'react';

import { Link } from 'gatsby';
import { ListViewBase } from 'react-native';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { users } from '../data/users';
import Info from './resume';
import styled from 'styled-components';
import { headline2 } from '@class101/ui/dist/core/TextStyles';


// Rendering
const AuthorsPage: React.FC = () => {
  // tslint:disable-next-line: no-console

  return (
    <Layout>
      <SEO title={`ELT`} pathname={`/tags`} />
      <Grid>
        {/* <Row>
          {users.map(user => (
            <Col key={user.name} lgOffset={3}>
              <Bio user={user} />
            </Col>
          ))}
        </Row> */}

        <Headline2>이 찬 행</Headline2> <span># Junior Developer </span>
        <hr />
        <br />
        <Headline3>ABOUT ME</Headline3>
        <hr />
        <hr />
        컴퓨터 공학과를 다녔지만, 사정이 생겨 자퇴하게 되고 여러 경험을 한 후
        에서야, 다시 돌고 돌아 개발을 하게 되었습니다. <br /> 개발을 배울 수
        있는 곳에서 웹 전반에 대한 학습과 이해뿐만 아니라 협업과 같은 외적인
        부분까지 아우르면서 소통하는 개발자가 되었습니다. <br />
        몇 개의 프로젝트를 진행하면서 애자일 스크럼을 통한 개발, 문제 해결 능력,
        로직 구성 등의 능력을 키웠습니다.
        <br />
        또 함께 협업한 동료들에게 들은 저의 장점은, 에러를 만나거나, 막히는
        문제에 대하여 빠르고, 좀 더 올바른 방향의 해결책을 찾아 생산력을 높였고,
        원활한 커뮤니케이션과 빠른 이해를 통해 목표로 하는 결과를 내는 데 도움이
        되었습니다. <br />
        과정 수료 후, 현재는 Instagram 크롤링 데이터 기반의 어플리케이션 개발을
        이어나가고 있습니다. 부족한 부분을 채워 나가기 위해 새로운 기술뿐만
        아니라, 내부 작동원리 까지 학습하며, 능력을 키워나가고 있습니다.
        {/* <hr /> */}
        {/* <hr /> */}
        <br />
        <br />
        <br />
        <Headline3>PROJECT SUMMARY</Headline3>
        <hr />
        <hr />
        <div>
          <h5>LOCAL SNS | 2019 (진행 중)</h5>
          개인 프로젝트 | Full-Stack <br />
          인스타그램 해시태그 | 장소 | 날짜 데이터를 크롤링 및 가공 하여
          사용하는 해시태그 데이터 기반 어플리케이션 입니다.
          <br />
          <br />
          - 인스타그램 태그 크롤링을 위한 Puppeteer 사용. <br />
          - 크롤링 데이터 가공 및 CSV 변환 / MongoDB(Mongoose) 연동. <br />
          - D3를 통한 데이터 시각화. <br />
          - Express 기반 RESTful API 구성 | 라우터 세팅. <br />
          - Expo 활용 애플리케이션 제작중
          <br />
          <br />
          현재 진행중인 프로젝트로, 개발이 완료 되기 까지 Github 및 노션은
          비공개인 상태 입니다.
          <br />
          <br />
          LINKS
          <br />
          <a href="https://developer-channing.com/blog/2019/10/29/channing">
            INSTAGRAM CRAWLING
          </a>
          <br />
          <a href="https://developer-channing.com/blog/2019/12/04/channing">
            LOCAL SNS
          </a>
        </div>
        <hr />
        <div>
          <h5>CRUNCH PRICE | 2019 </h5>
          기업협업 프로젝트 ( 개인화 상품 추천 기능 구현 ) | Back-End <br />
          AWS Personalize를 활용하여 MD의 개입없이 인공지능으로 사용자 개개인
          에게 맞는 상품 추천 시스템을 구현했습니다.
          <br />
          기업 측에서는 50만개 가량되는 데이터속에서 개별 사용자에게 알맞은 상품
          추천을 받기를 원했고, 이를 위하여 AWS Personalize를 활용했습니다.
          <br />
          <br />
          - AWS S3 에 저장할 mongoDB 데이터를 Pandas를 활용하여 JSON to CSV
          변환.
          <br />
          - AWS Personalize를 SDK(boto3)를 사용하여, Django 서버에 Personalize
          코드 구현 및 Personalize API 세팅.
          <br />
          - 하루 업데이트 되는 15000개 이상의 크런치 프라이스 유저 데이터
          자동화를 위해 Personalize API 활용 실시간 업데이트 구현.
          <br />
          - Airflow 배치 프로세싱을 이용하여Personalize 데이터(S3 CSV) 주기적
          업데이트 구현. <br />
          - 크런치 프라이스 메인 상품 추천 페이지에 Redux 활용 추천 값 렌더링.
          <br />
          - 10월 AWS Personalize 적용 후 실제 크런치 프라이스 사이트 클릭수(20%)
          및 매출 증가(9월 지표 대비)
          <br />
          <br />
          LINKS
          <br />
          <a href="https://developer-channing.com/blog/2019/10/21/channing">
            AWS Personalize
          </a>
        </div>
        <hr />
        <div>
          <h5>BLINKER | 2019</h5>
          윙크로 게임하기 | Front-End <br />
          openCV 기반 BRFV4 SDK를 사용하여 윙크(Blink)를 인식, 깜빡일때 점프하는
          웹 게임을 개발했습니다. <br /> <br />- Face Detection과 Tracking이
          가능한 Open CV 기반 BRFV4 SDK 연동. <br />- 클라이언트 React Component
          및 Client Side Routing 세팅 및 적용. <br />
          - 배포 환경에서의 게임내 웹캠 사용을 위해 AWS Certificate manager와
          CloudFront를 통한 HTTPS 연동. <br />
          <br />
          LINKS
          <br />
          <a href="https://github.com/CgodL/Blinker_Client">BLINKER GITHUB</a>
          <br />
          <a href="https://d3hj5v0x0oqu9l.cloudfront.net/">BLINKER GAME</a>
        </div>
        <br />
        <br />
        <br />
        <Headline3>TECHNICAL SKILLS</Headline3>
        <hr />
        <b>STRONG</b>: JavaScript / ES6 | React | Node.js( Express.js ) | AWS |
        MySQL | MongoDB(Mongoose) | Git | HTML5 / CSS <br />
        <b>KNOWLEDGEABLE</b> : Django | Airflow | Docker | TypeScript | GraphQL
        | Expo
        <br />
        <br />
        <br />
        <Headline3>EDUCATION AND ACTIVITIES </Headline3>
        <hr />
        코드 스테이츠 Immersive Course 14 ( 2019.07.22 - 2019.10.19 )<br />
        AWS 101 세미나 ( 2019.10.14 )<br />
        AWS 201 세미나 ( 2019.10.28 )<br />
        AWS 웨비나 ( 2019.11.14 )
        <br />
        <br />
        <br />
        <Headline3>CONTACT ME</Headline3>
        <hr />
        <b>BLOG </b>: <a href="https://developer-channing.com">
          developer-channing
        </a>{' '}
        <br />
        <b>GITHUB</b> : <a href="https://github.com/CgodL/">elt</a> <br />
        <b>E-MAIL</b> : c.henry.9209@gmail.com <br />
        <b>TEL</b> : 010-6328-4679
        <br />
        <br />
        <br />
      </Grid>
    </Layout>
  );
};

export default AuthorsPage;
