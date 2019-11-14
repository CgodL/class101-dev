import React from 'react';
import styled from 'styled-components';
import { Grid, TextStyles, Button, ButtonColor, Icon } from '@class101/ui';

export default class HeroSection extends React.PureComponent {
  public render() {
    return (
      <Container>
        <HeroImage src="/images/tree.jpg"></HeroImage>
        <InnerHeroContainer>
          <Grid>
            <h1>CHANNING</h1>
            <h3>
              BACKEND <br />
              DEVELOPER
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
  height: 45vh;
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
  padding: 96px 24px;
  color: white;
  h1 {
    ${TextStyles.headline1};
    color: white;
  }
  h3 {
    bold;
    color: #F9F6E5;
  }
`;
