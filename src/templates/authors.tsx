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
import me from './me.jpeg'

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
        <Parent>
          <img src={me} width="150px" height="200px"/>
          <br />
          <br />
          <Headline2>이 찬 행</Headline2> <span># Junior Developer # 29세</span>
          <hr />
          <br />
          <Headline2>ABOUT ME</Headline2>

          <hr />
          {/* 몇 개의 프로젝트를 진행하면서 애자일 스크럼을 통한 개발, 문제 해결 능력,
          로직 구성 등의 능력을 키웠습니다. */}
          {/* 개발 동안 에러를 만나거나, 막히는 문제에 대하여 빠르고, 좀 더 올바른 방향의 해결책을 찾아 생산력을 높였고, 원활한 커뮤니케이션과 빠른 이해를 통해 목표로 하는 결과를 내는 데 도움이
          되었습니다. 과정 수료 후,*/}
          동료들과의 협업을 좋아하고, 소통하는 개발자 입니다. 고안한 로직에 따라 구현되는 개발을 즐기며 다양한 분야에 관심이 많아 배우는걸 즐기고 있습니다.
          <br />창의적인 일을 좋아하며 아이디어를 기록하고, 실제 구체화 가능한지에 대한 고민을 하곤 합니다. 
          <br /> 현재는 Instagram 크롤링 데이터 기반의 어플리케이션 개발을 이어나가고 있습니다. 
          <br />
          <br />
          <br />
          <Headline2>PROJECT SUMMARY</Headline2>
          <hr />

          <div>
            <Inner><b>LOCAL SNS | 2019 (진행 중)</b></Inner>
            <Semi>개인 프로젝트 | Full-Stack | Expo | React | Express | AWS </Semi><br />
            인스타그램 해시태그 | 장소 | 날짜 데이터를 크롤링 및 가공 하여
            사용하는 해시태그 데이터 기반 어플리케이션 입니다.
          <br />
            <br />
            - Puppeteer를 활용하여 인스타그램 태그 크롤링. <br />
            - NoSQL(MongoDB) 사용 <br />
            - Express 서버 구성 | RESTful API 설계. <br />
            - Expo 활용 애플리케이션 제작 중.
          <br />
            <br />
            현재 진행중인 프로젝트 입니다.
          <br />
            <br />
            LINKS
          <br />
            <a href="https://developer-channing.com/blog/2019/10/29/channing">
              INSTAGRAM CRAWLING
          </a>
            <br />
            <a href="https://developer-channing.com/blog/2019/12/04/channing">
              LOCAL SNS SERVER
          </a>
            <br />
            <a href="https://developer-channing.com/blog/2019/12/08/channing">
              LOCAL SNS CLIENT
          </a>
          </div>
          <hr />
          <div>
            <Inner><b>CRUNCH PRICE | 2019</b> </Inner>
            <Semi>기업협업 프로젝트 ( 개인화 상품 추천 기능 구현 ) | Back-End | AWS | Django | Docker </Semi><br />
            AWS Personalize를 활용하여 MD의 개입없이 인공지능으로 사용자 개개인
            에게 맞는 상품 추천 시스템을 구현했습니다.
          <br />
            <br />
            - mongoDB 데이터 JSON to CSV 변환 및 AWS S3 저장
            변환.
          <br />
            - SDK(boto3)를 사용하여, Personalize
            코드 구현 및 Personalize API 세팅.
          <br />
            - 유저 데이터 업데이트
            자동화를 위해 Personalize API 활용 실시간 업데이트 구현.
          <br />
            - Airflow 배치 프로세싱을 이용하여 Personalize 데이터(S3 CSV) 주기적
          업데이트 구현. <br />
            - 크런치 프라이스 메인 상품 추천 페이지 Redux 활용 추천 값 렌더링.
          <br />
          <br />
            
            10월 AWS Personalize 적용 후 실제 크런치 프라이스 사이트 클릭수(20%)
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
            <Inner><b>BLINKER | 2019</b></Inner>
            <Semi>윙크로 게임하기 | Front-End | React | AWS</Semi> <br />
            openCV 기반 BRFV4 SDK를 사용하여 윙크(Blink)를 인식, 깜빡일때 점프하는
          웹 게임을 개발했습니다. <br /> <br />
            - Face Detection과 Tracking이
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
          <br />
          <Headline2>TECHNICAL SKILLS</Headline2>
          <hr />

          <b>Frontend</b> :  JavaScript | React | HTML5 / CSS <br />
          <b>Backend</b> : Node.js ( Express.js ) | REST API  <br />
          <b>DB</b> : MySQL | MongoDB ( Mongoose ) <br />
          <b>Tool</b> : AWS <br />
          <b>ETC</b> : Puppeteer  <br />
          <br />
          <br />
          <br />
          <br />
          <Headline2>EDUCATION AND ACTIVITIES </Headline2>
          <hr />

          - 코드 스테이츠(부트캠프) Immersive Course 14 ( 2019.07.22 - 2019.10.19 )<br />
          - AWS 101 세미나 ( 2019.10.14 )<br />
          - AWS 201 세미나 ( 2019.10.28 )<br />
          - AWS 웨비나 ( 2019.11.14 )
          <br />
          <br />
          <br />
          <br />
          <Headline2>CONTACT ME</Headline2>
          <hr />
          <b>Blog</b> : <K> <a href="https://developer-channing.com">
            developer-channing</a></K>
          {' '}
          <br />
          <b>Github </b>  : <a href="https://github.com/CgodL/">elt</a> <br />
          <b>E-Mail</b> : c.henry.9209@gmail.com <br />
          <b>Tel</b> : 010-6328-4679
        <br />
          <br />
          <br />
        </Parent>
      </Grid>
    </Layout>
  );
};



const S = styled.span`
  font-weight: 500;
  color: #ff9966;
  font-family: 'Raleway', sans-serif, monospace, 'Noto Serif KR';
`

const K = styled.span`
  font-weight: 400;
  color: #696969;
  font-family: 'Raleway', sans-serif, monospace, 'Noto Serif KR';
`

const Parent = styled.span`
  font-weight: 400;
  font-family: 'Raleway', sans-serif, monospace, 'Noto Serif KR'
`

const Semi = styled.span`
  font-weight: 900;
  color: #696969;
`

const Inner = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: #696969;
`

export default AuthorsPage;
