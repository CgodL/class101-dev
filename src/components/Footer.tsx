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
                  <a href="mailto:c.henry.92092@gmail.com">
                    c.henry.9209@gmail.com
                  </a>
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
  background-color: #fbeef1;
  padding-top: 32px;
  a {
    color: inherit;
    font-weight: 600;
    color: #696969;
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
  padding: 16px 0;
`;
