import React from 'react';
import styled from 'styled-components';
import { Grid, TextStyles, Button, ButtonColor, Icon } from '@class101/ui';

export default class HeroSection extends React.PureComponent {
  public render() {
    return (
      <Container>
        <HeroImage src="/images/back1.jpg"></HeroImage>
        <InnerHeroContainer>
          <Grid>
            <h1>C H A N N I N G</h1>
            <h3>
              S O F T W A R E <br />
              D E V E L O P E R
            </h3>
          </Grid>
        </InnerHeroContainer>
      </Container>
    );
  }
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 50vh;
  z-index: 0;
  margin: -32px 0 64px;
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InnerHeroContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 120px 24px;
  padding-left: 500px;
  color: white;
  h1 {
    ${TextStyles.headline1};
    color: #F2BBBB;
  }
  h3 {
    bold;
    font-size: 18.72px;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: #F2BBBB;
  }
`;
