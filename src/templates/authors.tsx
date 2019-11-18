import { Grid, Headline2, Row, Col } from '@class101/ui';
import React from 'react';

import { Link } from 'gatsby';
import { ListViewBase } from 'react-native';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { users } from '../data/users'
import Info from './resume'


// Rendering
const AuthorsPage: React.FC = () => {
  // tslint:disable-next-line: no-console
  return (
    <Layout>
      <SEO title={`ELT`} pathname={`/tags`} />
      <Grid>
        <Row>
          {users.map(user => (
            <Col key={user.name} lgOffset={2}>
              <Bio user={user} />
            </Col>
          ))}
        </Row>
        <Info />
      </Grid>

    </Layout >
  )
};


export default AuthorsPage;

