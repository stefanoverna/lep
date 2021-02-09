/* eslint-disable import/prefer-default-export */
// https://github.com/zsajjad/react-facebook-pixel/issues/53#issuecomment-699531480

export const event = async ({ action, name, category }) => {
  const { default: ReactPixel } = await import("react-facebook-pixel");
  ReactPixel.trackCustom(action, {
    content_name: name,
    content_category: category,
  });
};
