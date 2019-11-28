import { Grid, Headline2, Row, Col } from '@class101/ui';
import React from 'react';

import { Link } from 'gatsby';
import { ListViewBase } from 'react-native';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { users } from '../data/users'
import Info from './resume'
import styled from 'styled-components';



// Rendering
const AuthorsPage: React.FC = () => {
  // tslint:disable-next-line: no-console
  return (
    <Layout>
      <SEO title={`ELT`} pathname={`/tags`} />
      <Grid>
        <Row>
          {users.map(user => (
            <Col key={user.name} lgOffset={3}>
              <Bio user={user} />
              <br></br>
              <a href="https://www.notion.so/elt1992/Lee-Chan-Haeng-074a6e1fabd244ff830ae862a200dd5f">🤩R E S U M E👈🏻👈🏻👈🏻</a>
              <p>c.henry.9209@gmail.com</p>
            </Col>
          ))}
        </Row>
        {/* <Info /> */}
      </Grid>

    </Layout >
  )
};


export default AuthorsPage;

