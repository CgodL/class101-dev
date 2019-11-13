import React from 'react';

interface Props {
    label: string;
    content: string[];
    term: string;
}

const personalInformationObj = [
    {
        label: 'FULL NAME',
        content: 'Ola Maria Lowe'
    },
    {
        label: 'D.O.B',
        content: '05 Sep 1986'
    },
    {
        label: 'ADDRESS',
        content: '24058, Belgium, Brussels, Liutte 27, BE',
    },
    {
        label: 'E-MAIL',
        content: 'robertsmith@company.com',
    },
    {
        label: 'PHONE',
        content: '+1 256 254 84 56',
    },
    {
        label: 'FREELANCE',
        content: 'Available',
    },
];

const skillObj = [
    {
        label: 'JavaScript',
        content: 9
    },
    {
        label: 'Django',
        content: 5
    },
    {
        label: 'Docker',
        content: 3
    }
];

const projectObj = [
    {
        label: 'Blinker',
        content: ['기존 게임 flappy bird에 openCV 기반 BRFV4 SDK를 사용하여 얼굴인식 중 윙크(Blink) 를 인식하여 눈을 깜빡일때 점프하는 웹 게임 개발', '클라이언트 React Component 및 Client Side Routing 세팅 및 적용', '얼굴 인식을 위한 Open CV 기반 BRFV4 SDK 연동'],
        term: '',
    },
    {
        label: 'Crunch Price',
        content: ['AWS Personalize를 활용하여 MD의 개입없이 인공지능으로 사용자 개개인 에게 맞는 상품 추천 시스템 구현', 'AWS S3 - mongoDB 데이터 Pandas를 활용한 JSON to CSV 변환 및 사용',
            'AWS Personalize를 SDK(boto3)를 사용하여, Django 서버에 Personalize 코드 구현 및 Personalize API 세팅', '하루 업데이트 되는 15000개 이상의 크런치 프라이스 유저 데이터 자동화를 위해 Personalize API 활용 실시간 업데이트 구현 및 Airflow 자동화 툴을 사용 Personalize 데이터(S3 CSV) 주기적 업데이트 구현'],
        term: '',
    },
    // {
    //     label: 'Instagram Crawling',
    //     content: '',
    //     term: '',
    // },
    // {
    //     label: 'Airbnb Clone',
    //     content: '',
    //     term: '',
    // },
    // {
    //     label: 'TypeScript Blockchain',
    //     content: '',
    //     term: '',
    // }
]


export { personalInformationObj, skillObj, projectObj };