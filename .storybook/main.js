// https://www.learnstorybook.com/intro-to-storybook/react/en/simple-component/
// https://medium.com/javascript-in-plain-english/next-js-storybook-3f8e5a8dab3d
const path = require("path");
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  stories: [
    "../components/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (baseConfig) => {
    const nextConfig = require("../next.config.js");
    // Resolve aliases used in project
    baseConfig.resolve = {
      ...baseConfig.resolve,
      alias: {
        ...baseConfig.resolve.alias,
        components: path.resolve(__dirname, "../components"),
        shapes: path.resolve(__dirname, "../shapes"),
        lib: path.resolve(__dirname, "../lib"),
        public: path.resolve(__dirname, "../public"),
        "@emotion/core": toPath("node_modules/@emotion/react"),
        "emotion-theming": toPath("node_modules/@emotion/react"),
        "@": path.resolve(__dirname, "../"),
      },
    };

    // Merge your next webpack config with this base
    return { ...nextConfig.webpack, ...baseConfig };
  },
};
