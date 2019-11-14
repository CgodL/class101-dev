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
  margin: 4px;
  text-decoration: none;
  color: #8C9C88;
  background: white;
  border-radius: 4px;
  &.active {
    color: white;
    background: #155764;
  }
  &:hover {
    background: #00BF9E;
  }
`;
