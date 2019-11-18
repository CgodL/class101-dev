import { Colors } from '@class101/ui';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import LinkWithLang from './LinkWithLang';

interface Props {
  numPages: number;
  currentPage: number;
}

const Paginator: React.FC<Props> = ({ numPages, language, currentPage }) => {
  const links = [];
  for (let i = 0; i < numPages; i += 1) {
    links.push(
      <PaginationLink key={i} className={i === currentPage - 1 ? 'active' : ''} to={`/${i === 0 ? '/' : `/blog/${i + 1}`}`}>
        {i + 1}
      </PaginationLink>
    );
  }

  return <PaginationWrapper>{links}</PaginationWrapper>;
};

export default Paginator;

const PaginationWrapper = styled.div`
  text-align: center;
`;

const PaginationLink = styled(LinkWithLang)`
  padding: 8px 14px;

  padiing-bottom: 3px;
  margin: 5px;
  text-decoration: none;
  color: #FFB7AC;
  background: white;
  border-radius: 4px;
  &.active {
    color: white;
    background: #ff8793;
  }
  &:hover {
    background: #F2BBBB;
  }
`;
