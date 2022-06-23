module.exports = {
  siteMetadata: {
    title: `mymetas`,
    image: "/images/author.jpeg",
    description: `My Blog`,
    siteUrl: `https://blog.mymetas.top`,
    social: {
      douban: "mymetas",
      email: "luciastenzbdn55@gmail.com",
      facebook: "",
      github: "mymetas",
      instagram: "",
      linkedin: "mymetas",
      rss: "/feed.xml",
      telegram: "mymetas",
      twitter: "mymetas_datong",
      youtube: "",
      keybase: "mymetas",
    },
    sidebarMenu: [
      { url: "/archive/", label: "归档" },
      { url: "/tags/", label: "标签" },
      { url: "/about/", label: "About" },
    ],
    footerHTML: `Powered by <a href="https://www.gatsbyjs.com/">Gatsby</a> and <a href="https://github.com/mymetas/gatsby-starter-breeze">Breeze Theme</a><br/> © 2017 - 2021 <a href="https://github.com/mymetas">mymetas</a> All rights reserved.`,
    dateFormat: `YYYY-MM-DD`,
    language: `zh`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `content`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                table: "table table-hover",
              },
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-118116525-1`,
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `mymetas.top`,
        // this plugin is buggy and would generate an incorrect URL to the plausible JS file
        // you need to do some rewrites on the serve side, like:
        // rewrite /js/index.js /js/plausible.js (for Caddy)
        customDomain: `plausible.mymetas.top`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  title: edge.node.frontmatter.title,
                  description:
                    edge.node.frontmatter.description || edge.node.excerpt,
                  date: edge.node.fields.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [fields___date] },
                  filter: {frontmatter: {layout: {ne: "page"}}},
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields {
                        slug
                        date
                      }
                      frontmatter {
                        title
                        description
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "mymetas",
          },
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mymetas`,
        short_name: `mymetas`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#177682`,
        display: `minimal-ui`,
        icon: `static/images/me.jpeg`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Quicksand`, `Noto Serif SC`],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: "39618491b5342b59d97b",
          clientSecret: "b6e7882237951cdd3c8a97a4e91b9324a01f70a6",
          repo: "mymetas",
          owner: "mymetas",
          admin: ["mymetas"],
          pagerDirection: "first",
          createIssueManually: true,
          distractionFreeMode: false,
          enableHotKey: true,
          // fix CORS errors
          proxy:
            "https://cors-anywhere.azm.workers.dev/https://github.com/login/oauth/access_token",
        },
      },
    },
    "gatsby-redirect-from",
    "gatsby-plugin-meta-redirect", // make sure this is always the last one
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
