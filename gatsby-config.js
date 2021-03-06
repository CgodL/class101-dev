module.exports = {
  siteMetadata: {
    title: `Channing Blog`,
    author: `Channing`,
    description: `DEVELOPER`,
    keywords: [
      'class101',
      'typescript',
      'monorepo',
      'react',
      'graphql',
      'apllo',
      'aws'
    ],
    siteUrl: `https://developer-channing.com/`,
    facebookAppId: '',
    social: {
      twitter: ``
    }
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Noto Sans KR`,
            variants: [`300`, `400`, `600`, `700`, `800`]
          },
          {
            family: `Source Code Pro`,
            variants: [`400`, `600`]
          },
          {
            family: `Nanum Gothic`,
            variants: [`400`, `600`]
          },
          {
            family: `Song Myung`,
            variants: [`400`, `600`]
          },
          {
            family: `Noto Serif KR`,
            variants: [`400`, `600`]
          },
          {
            family: `Shadows Into Light`,
            variants: [`400`, `600`]
          },
          {
            family: `Raleway`,
            varinats: [`200`, `400`, `500`]
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      optiopns: {
        enableIdentityWidget: false
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets`,
    //     name: `assets`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/assets/images`,
    //     name: `images`,
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        tableOfContents: {
          heading: null,
          maxDepth: 6
        },
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow'
            }
          },
          // {
          //   resolve: `gatsby-remark-vscode`,
          //   // All options are optional. Defaults shown here.
          //   options: {
          //     colorTheme: 'Dark+ (default dark)', // Read on for list of included themes. Also accepts object and function forms.
          //     wrapperClassName: '', // Additional class put on 'pre' tag
          //     injectStyles: true, // Injects (minimal) additional CSS for layout and scrolling
          //     extensions: [], // Extensions to download from the marketplace to provide more languages and themes
          //     // Absolute path to the directory where extensions will be downloaded. Defaults to inside node_modules.
          //     extensionDataDirectory: path.resolve('extensions'),
          //     languageAliases: {}, // Map of custom/unknown language codes to standard/known language codes
          //     replaceColor: x => x, // Function allowing replacement of a theme color with another. Useful for replacing hex colors with CSS variables.
          //     getLineClassName: ({
          //       // Function allowing dynamic setting of additional class names on individual lines
          //       content, //   - the string content of the line
          //       index, //   - the zero-based index of the line within the code fence
          //       language, //   - the language specified for the code fence
          //       codeFenceOptions //   - any options set on the code fence alongside the language (more on this later)
          //     }) => '',
          //     logLevel: 'error' // Set to 'warn' to debug if something looks wrong
          //   }
          // },
          {
            resolve: `gatsby-remark-autolink-headers`,
            optoins: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `custom-class`,
              maintainCase: true,
              removeAccents: true
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: 'hljs-',
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
              // This toggles the display of line numbers globally alongside the code.
              // To use it, add the following line in src/layouts/index.js
              // right after importing the prism color scheme:
              //  `require("prismjs/plugins/line-numbers/prism-line-numbers.css");`
              // Defaults to false.
              // If you wish to only show line numbers on certain code blocks,
              // leave false and use the {numberLines: true} syntax below
              showLineNumbers: false,
              // If setting this to true, the parser won't handle and highlight inline
              // code used in markdown i.e. single backtick code like `this`.
              noInlineHighlight: false
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-151758942-1`
      }
    },
    {
      resolve: `gatsby-plugin-facebook-analytics`,
      options: {
        // Required - set this to the ID of your facebook app.
        appId: `2582489538450547`,

        // Which version of the SDK to load.
        version: `v3.3`,

        // Determines whether XFBML tags used by social plugins are parsed.
        xfbml: true,

        // Determines whether a cookie is created for the session or not.
        cookie: false,

        // Include facebook analytics in development.
        // Defaults to false meaning the library will only be loaded in production.
        includeInDevelopment: false,

        // Include debug version of sdk
        // Defaults to false meaning the library will load sdk.js
        debug: false,

        // Select your language.
        language: `ko`
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Blog`,
        short_name: ``,
        description: ``,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        lang: `ko`,
        display: `fullscreen`,
        include_favicon: true,
        icon: `static/icons/henry.png`,
        icons: [
          {
            src: 'static/icons/henry.png',
            sizes: '48x48',
            type: 'image/png'
          },
          {
            src: 'static/icons/henry.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: 'static/icons/henry.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: 'static/icons/henry.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: 'static/icons/henry.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'static/icons/henry.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'static/icons/henry.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'static/icons/henry.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      }
    },
    {
      resolve: `gatsby-plugin-typescript`
    }
  ]
};
