import { Col, Colors, Grid, Row, TextStyles } from '@class101/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Grid>
        <Row>
          <Col>
            <ContactSection>
              <ContactArticle>
                <div>
                  TEL: 010-6328-4679
                </div>
                <div>
                  Powerd by Gatsby & Deployed by Netlify
                </div>
              </ContactArticle>
            </ContactSection>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  background-color: #588681;
  padding-top: 0px;
  a {
    color: inherit;
    font-weight: 400;
    color: white;
    text-decoration: none;
    &:hover {
      color: inherit;
      text-decoration: underline;
    }
  }
  p {
    padding: 0;
    margin: 4px 0;
  }
`;

const LogoIcon = styled.img`
  width: auto;
  height: 40px;
  margin: 0;
`;

const DownloadIcon = styled.img`
  width: 120px;
  margin-right: 16px;
`;

const ContactSection = styled.div`
  ${TextStyles.body1};
`;
const ContactArticle = styled.div`
  padding: 14px 0;
  color: white;
`;
