import { Body2, Colors, TextStyles } from '@class101/ui';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

import Img from '../components/Img';
import { Node } from '../graphql-types';
import LinkWithLang from './LinkWithLang';

interface Props {
  node: Node;
}

const PostCard: React.FC<Props> = props => {
  const {
    node: {
      fields: { slug },
      frontmatter: { title, description, thumbnail, date, author },
      excerpt,
    },
  } = props;

  const { t } = useTranslation();

  return (
    <Card to={`/${slug}`}>
      <CardThumbnail src={thumbnail} />
      <CardBody>
        <CardCaption>{date}</CardCaption>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description || excerpt}</CardDescription>
        <CardCaption>
          Written By <b>{t(`profile.name.${author}`)}</b>
        </CardCaption>
      </CardBody>
    </Card>
  );
};

export default PostCard;

const Card = styled(LinkWithLang)`
  display: block;
  border-radius: 10px;
  // box-shadow: 0 0.3px 1px rgba(0, 0, 0, 0.46);
  // box-shadow: 0 1px 1px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23);
  box-sizing: border-box;
  background: white;
  text-decoration: none;
  margin-bottom: 16px;
  &:hover {
    transform: scale(1.025);
    transition: transform 0.3s ease-in;
    color: inherit;
    img {
      transition: transform 0.3s ease-in;
      // transform: scale(1.025);
    }
  }
`;

const CardBody = styled.div`
  padding: 8px 0;
`;

const CardThumbnail = styled(Img)`
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const CardTitle = styled.h2`
  ${TextStyles.subtitle1};
  margin-bottom: 4px;
  margin: 10px;
`;

const CardCaption = styled(Body2)`
  color: ${Colors.gray700};
  margin-bottom: 4px;
  margin: 10px;
`;

const CardDescription = styled.div`
  ${TextStyles.body2}
  color: ${Colors.gray900};
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: none;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 라인수 */
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  line-height: 1.5em;
  height: 4.5em;
  margin-bottom: 4px;
  margin: 10px;
`;
