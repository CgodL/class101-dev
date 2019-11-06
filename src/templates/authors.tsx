import { Grid, Headline2, Row, Col } from '@class101/ui';
import React from 'react';

import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { users } from '../data/users';


const AuthorsPage: React.FC = () => {

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
      </Grid>
    </Layout>
  )
};

export default AuthorsPage;
