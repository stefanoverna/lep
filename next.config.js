const path = require("path");
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

const svgTemplate = (
  { template },
  opts,
  { imports, componentName, props, jsx }
) => template.ast`${imports}
    const ${componentName} = (${props}) => ${jsx};
    export default ${componentName};
  `;

module.exports = withMDX({
  reactStrictMode: true,

  // https://nextjs.org/docs/api-reference/next.config.js/redirects
  async redirects() {
    const redirects = [
      {
        source: "/learn/about-us",
        destination: "/frequently-asked-questions",
        permanent: true,
      },
      {
        source: "/learn/tips/allergies",
        destination: "/allergy-immunotherapy-for-you",
        permanent: true,
      },
      {
        source: "/consult",
        destination: "https://portal.getcleared.com/",
        permanent: true,
      },
      {
        source: "/allergy-immunotherapy",
        destination: "/allergy-immunotherapy-for-you",
        permanent: true,
      },
    ];

    // quickly handle dev pages in production
    if (process.env.NODE_ENV === "production") {
      redirects.push(
        ...[
          {
            source: "/category-relief-medications",
            destination: "/",
            permanent: false,
          },
          {
            source: "/category-immunotherapy",
            destination: "/",
            permanent: false,
          },
        ]
      );
    }

    return redirects;
  },

  // MDX page extensions
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],

  webpack(config) {
    config.resolve.modules.push(path.resolve("./"));

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.jsx?$/,
      },
      include: [path.resolve("./public/images")],
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: false,
            template: svgTemplate,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.jsx?$/,
      },
      include: [path.resolve("./public/icons")],
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
            template: svgTemplate,
          },
        },
      ],
    });

    return config;
  },
});
