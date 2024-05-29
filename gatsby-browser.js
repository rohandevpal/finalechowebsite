const React = require("react");
require("./src/styles/global.scss");

const {
  AlertBannerProvider,
} = require("./src/lib/contexts/alertBannerContext");

exports.wrapRootElement = ({ element, ...props }) => {
  return <AlertBannerProvider>{element}</AlertBannerProvider>;
};
