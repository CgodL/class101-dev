/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { SiteMetadata } from '../graphql-types';
interface Props {
  title?: string;
  description?: string;
  thumbnail?: string;
  author?: string;
  lang?: string;
  pathname?: string;
}

const SEO: React.SFC<Props> = props => {
  const queryResult = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            siteUrl
            keywords
            facebookAppId
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const appleIcons = [57, 60, 72, 76, 114, 120, 144, 180, 180];

  const siteMetadata: SiteMetadata = queryResult.site.siteMetadata;

  const { lang = 'ko', title, description, thumbnail, author, pathname } = props;

  const absolutedThumbnail = siteMetadata.siteUrl + (thumbnail || '/images/default.jpg');

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      link={[
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x26.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '57x57', href: '/apple-icon-57x57.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '60x60', href: '/apple-icon-60x60.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '72x72', href: '/apple-icon-72x72.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '76x76', href: '/apple-icon-76x76.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '114x114', href: '/apple-icon-114x114.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '120x120', href: '/apple-icon-120x120.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '144x144', href: '/apple-icon-144x144.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '152x152', href: '/apple-icon-152x152.png' },
        { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-icon-180x180.png' },
        { rel: 'shortcut icon', type: 'ico', href: '/favicon.ico' },
      ]}
      meta={[
        {
          name: `description`,
          content: description || siteMetadata.description,
        },
        {
          name: 'author',
          content: author || siteMetadata.author,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:url`,
          content: `${siteMetadata.siteUrl}${pathname || '/'}`,
        },
        {
          property: `og:image`,
          content: absolutedThumbnail,
        },
        {
          property: `og:image:width`,
          content: '1600',
        },
        {
          property: `og:image:height`,
          content: '900',
        },
        {
          property: `og:description`,
          content: description || siteMetadata.description,
        },
        {
          property: `og:type`,
          content: author === 'Class101' ? 'website' : 'article',
        },
        {
          property: 'og:site_name',
          content: siteMetadata.title,
        },

        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author || siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description || siteMetadata.description,
        },
        {
          name: 'twitter:label1',
          content: 'Written By',
        },
        {
          name: 'twiiter:data1',
          content: author || siteMetadata.author,
        },
        {
          name: 'keywords',
          content: siteMetadata.keywords.join(`, `),
        },
        {
          name: 'fb:app_id',
          content: siteMetadata.facebookAppId,
        },
        {
          name: 'msapplication-TileColor',
          content: '#ffffff',
        },
        {
          name: 'msapplication-TileImage',
          content: '/ms-icon-144x144.png',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
      ]}
    />
  );
};

export default SEO;
