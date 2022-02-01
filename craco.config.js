const CracoLessPlugin = require('craco-less');
const COLORS = require('./src/constants/colors');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': COLORS.success,
              '@success-color': COLORS.success,
              '@error-color': COLORS.danger,
              '@text-color': COLORS.black,
              '@border-radius-base': '5px',
              '@border-color-base': COLORS.border,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};