import { Body2, Col, Colors, Grid, Row, TextStyles } from '@class101/ui';
import { RouteComponentProps } from '@reach/router';
import { graphql } from 'gatsby';
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import Bio from '../components/Bio';
import Comments from '../components/Comments';
import Img from '../components/Img';
import Layout from '../components/Layout';
import LinkTag from '../components/LinkTag';
import LinkWithLang from '../components/LinkWithLang';
import RecruitingCard from '../components/RecruitingCard';
import SEO from '../components/SEO';
import ShareButtons from '../components/ShareButtons';
import { MarkdownRemark, Site, User } from '../graphql-types';
import markdown from '../utils/markdown';

interface Props {
  data: {
    site: Site;
    markdownRemark: MarkdownRemark;
  };
  pageContext: {
    user: User;
    previous: MarkdownRemark;
    next: MarkdownRemark;
  };
}

const options: HTMLReactParserOptions = {
  replace: domEl => {
    if (!domEl.parent || !domEl.parent.name) {
      return;
    }

    const tagName = domEl.parent.name;

    if (
      tagName === 'h1' ||
      tagName === 'h2' ||
      tagName === 'h3' ||
      tagName === 'h4' ||
      tagName === 'h5' ||
      tagName === 'h6'
    ) {
      const innerText = domEl.data as string;

      return React.createElement('span', { id: encodeURI(_.kebabCase(innerText)) }, innerText);
    }

    return;
  },
};

const PostTemplate: React.FC<Props & RouteComponentProps> = props => {
  const {
    pageContext: { previous, next, user },
    data: {
      site: {
        siteMetadata: { siteUrl },
      },
      markdownRemark: {
        tableOfContents,
        excerpt,
        html,
        fields: { slug },
        frontmatter: { title, date, description, thumbnail, author, tags },
      },
    },
    location: { href, pathname },
  } = props;

  { console.log(slug, parse(tableOfContents)) }

  return (
    <Layout>
      <SEO
        title={title}
        description={`${description} ${excerpt}`}
        thumbnail={thumbnail}
        author={author}
        pathname={pathname}
      />
      <Grid>
        <Row>
          <Col>
            <PostContainer>
              <PostHeader>
                <ShareButtons url={href} />

                {tags.map((tag: string) => (
                  <LinkTag fieldValue={tag} key={tag} />
                ))}
                <PostTitle>{title}</PostTitle>

                <PostDate>{date}</PostDate>
              </PostHeader>


              {tableOfContents && <PostTOC>{parse(tableOfContents, options)}</PostTOC>}


              <PostWrapper className="markdown-body">{parse(html, options)}</PostWrapper>

              {tags.includes('recruiting') && <RecruitingCard />}

              <PostFooter>
                {previous && (
                  <PostNavigator to={`/${previous.fields.slug}`}>
                    <PostNavigatorTitle>
                      <span>이전 글</span>
                      <br />
                      <b>{previous.frontmatter.title}</b>
                    </PostNavigatorTitle>
                    <Img src={previous.frontmatter.thumbnail} />
                  </PostNavigator>
                )}
                {next && (
                  <PostNavigator to={`/${next.fields.slug}`}>
                    <PostNavigatorTitle>
                      <span>다음 글</span>
                      <br />
                      <b>{next.frontmatter.title}</b>
                    </PostNavigatorTitle>
                    <Img src={next.frontmatter.thumbnail} />
                  </PostNavigator>
                )}
              </PostFooter>
            </PostContainer>
          </Col>
        </Row>
        <Row>
          <Col>
            <Bio user={user} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Comments title={title} siteUrl={siteUrl} slug={pathname} />
          </Col>
        </Row>
      </Grid>
    </Layout>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $language: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug }, language: { eq: $language } }) {
      id
      tableOfContents
      excerpt(pruneLength: 300, truncate: true)
      html
      fields {
        slug
        language
      }
      frontmatter {
        title
        thumbnail
        date(formatString: "YYYY-MM-DD")
        description
        author
        tags
      }
    }
  }
`;

const PostContainer = styled.div`
  background: white;
  border-radius: 3px;
  margin: 0 auto;
  ${markdown};
`;

const PostHeader = styled.div`
  padding: 32px 8px;
  text-align: center;
`;

const PostTitle = styled.h1`
  ${TextStyles.headline2}
  margin: 16px 0;
`;

const PostDate = styled(Body2)`
  margin-bottom: 16px;
`;

const PostTOC = styled.div`
  ${TextStyles.body2};
  margin: 16px 0;
  padding: 16px 0;
  line-height: 26px;
  border: #fbeef1 solid 2px;
  a {
    color: #696969;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  ul,
  ol {
    margin: 0 0 0 8px;
    // color: #fbeef1  
    // list-style-type: decimal;
  }
  p {
    margin: 0;
  }
`;

const PostWrapper = styled.section`
  margin: auto;
  padding: 120px 0 0;
  max-width: 2000px;
  font-size: 14px;
  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }

  h1 {
    margin: .67em 0;
    font-size: 36px;
  }

  time {
    margin: 1em 0;
    font-size: 14px;
  }

  @import url("https://fonts.googleapis.com/css?family=Inconsolata");

  /**
   * based on zenburn.css
   *
   * Zenburn style from voldmar.ru (c) Vladimir Epifanov <voldmar@voldmar.ru>
   * based on dark.css by Ivan Sagalaev
   *
   * change .markdown into .gatsby-highlight
   * remove .hljs- prefix
   */

  .gatsby-highlight pre {
    display: block;
    position: relative;
    padding: 20px 0 0;
    background: #263238;
    color: #dcdcdc;
    border-radius: 5px;
    overflow-y: hidden;
  }

  .gatsby-highlight pre:before {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 20px;
    width: 10px;
    height: 10px;
    background-color: #ff5f56;
    border-radius: 50%;
    content: '';
  }

  .gatsby-highlight pre:after {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 40px;
    width: 10px;
    height: 10px;
    background-color: #ffbd2e;
    border-radius: 50%;
    content: '';
  }

  .gatsby-highlight pre code:before {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 60px;
    width: 10px;
    height: 10px;
    background-color: #27c93f;
    border-radius: 50%;
    content: '';
  }

  .gatsby-highlight pre code {
    background: none;
    border: none;
    border-radius: 3px;
    display: inline-block;
    overflow: inherit;
    padding: 1.58333rem;
    white-space: inherit;
    word-wrap: normal;
    font-family: Inconsolata, monospace;
  }

  .gatsby-highlight code {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    white-space: pre;
    white-space: pre-wrap;
    white-space: pre-line;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -hp-pre-wrap;
    word-wrap: break-word;
    background: transparent;
    color: #3B9CFF;
    display: inline;
    font-family: D2Coding, 'D2 coding', monospace, serif;
    max-width: 100%;
    overflow: auto;
    padding: 0 0.1625rem;
  }

  .gatsby-highlight {
    position: relative;
  }

  .gatsby-highlight pre code {
    color: #dcdcdc;
    font-size: 17px;
  }

  .gatsby-highlight .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    line-height: 12px;
    color: #263238;
    background-color: #dcdcdc;
    background-image: linear-gradient(#ededed, #dcdcdc);
    outline: 0;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
    z-index: 3;
  }

  .gatsby-highlight .copy-button:hover {
    background-color: #dcdcdc;
    background-image: linear-gradient(#dcdcdc, #cbcbcb);
    border-color: #cbcbcb;
  }

  .gatsby-highlight .copy-button:active {
    background-color: #cbcbcb;
    background-image: linear-gradient(#cbcbcb, #bababa);
    border-color: #bababa;
  }

  .gatsby-highlight .keyword,
  .gatsby-highlight .tag,
  .gatsby-highlight .css .class,
  .gatsby-highlight .css .id,
  .gatsby-highlight .lisp .title,
  .gatsby-highlight .nginx .title,
  .gatsby-highlight .request,
  .gatsby-highlight .status,
  .gatsby-highlight .clojure .attribute {
    color: #e3ceab;
  }

  .gatsby-highlight .django .template_tag,
  .gatsby-highlight .django .variable,
  .gatsby-highlight .django .filter .argument {
    color: #dcdcdc;
  }

  .gatsby-highlight .number,
  .gatsby-highlight .date {
    color: #8cd0d3;
  }

  .gatsby-highlight .dos .envvar,
  .gatsby-highlight .dos .stream,
  .gatsby-highlight .variable,
  .gatsby-highlight .apache .sqbracket {
    color: #efdcbc;
  }

  .gatsby-highlight .dos .flow,
  .gatsby-highlight .diff .change,
  .gatsby-highlight .python .exception,
  .gatsby-highlight .python .built_in,
  .gatsby-highlight .literal,
  .gatsby-highlight .tex .special {
    color: #efefaf;
  }

  .gatsby-highlight .diff .chunk,
  .gatsby-highlight .subst {
    color: #8f8f8f;
  }

  .gatsby-highlight .dos .keyword,
  .gatsby-highlight .python .decorator,
  .gatsby-highlight .title,
  .gatsby-highlight .haskell .type,
  .gatsby-highlight .diff .header,
  .gatsby-highlight .ruby .class .parent,
  .gatsby-highlight .apache .tag,
  .gatsby-highlight .nginx .built_in,
  .gatsby-highlight .tex .command,
  .gatsby-highlight .prompt {
    color: #efef8f;
  }

  .gatsby-highlight .dos .winutils,
  .gatsby-highlight .ruby .symbol,
  .gatsby-highlight .ruby .symbol .string,
  .gatsby-highlight .ruby .string {
    color: #dca3a3;
  }

  .gatsby-highlight .diff .deletion,
  .gatsby-highlight .string,
  .gatsby-highlight .tag .value,
  .gatsby-highlight .preprocessor,
  .gatsby-highlight .pragma,
  .gatsby-highlight .built_in,
  .gatsby-highlight .sql .aggregate,
  .gatsby-highlight .javadoc,
  .gatsby-highlight .smalltalk .class,
  .gatsby-highlight .smalltalk .localvars,
  .gatsby-highlight .smalltalk .array,
  .gatsby-highlight .css .rules .value,
  .gatsby-highlight .attr_selector,
  .gatsby-highlight .pseudo,
  .gatsby-highlight .apache .cbracket,
  .gatsby-highlight .tex .formula,
  .gatsby-highlight .coffeescript .attribute {
    color: #cc9393;
  }

  .gatsby-highlight .shebang,
  .gatsby-highlight .diff .addition,
  .gatsby-highlight .comment,
  .gatsby-highlight .java .annotation,
  .gatsby-highlight .template_comment,
  .gatsby-highlight .pi,
  .gatsby-highlight .doctype {
    color: #7f9f7f;
  }

  .gatsby-highlight .coffeescript .javascript,
  .gatsby-highlight .javascript .xml,
  .gatsby-highlight .tex .formula,
  .gatsby-highlight .xml .javascript,
  .gatsby-highlight .xml .vbscript,
  .gatsby-highlight .xml .css,
  .gatsby-highlight .xml .cdata {
    opacity: 0.5;
  }
`;

const PostFooter = styled.div`
  display: flex;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

const PostNavigator = styled(LinkWithLang)`
  display: block;
  position: relative;
  background: black;
  flex: 1;
  opacity: 0.99;
  img {
    z-index: 1;
    opacity: 0.5;
  }
  &:hover {
    img {
      transition: transform 0.3s ease-in;
      transform: scale(1.025);
    }
  }
`;

const PostNavigatorTitle = styled.p`
  font-size: 19px;
  position: absolute;
  top: 50%;
  margin-top: -39px;
  text-align: center;
  width: 100%;
  font-weight: 800;
  color: white;
  z-index: 2;
  span {
    font-weight: 400;
  }
  b {
    font-weight: 600;
  }
`;
