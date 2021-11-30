import { CSSOptions } from 'vite';
import { getThemeVariables } from 'antd/dist/theme';

const cssOption: CSSOptions = {
  preprocessorOptions: {
    less: {
      javascriptEnabled: true,
      modifyVars: {
        ...getThemeVariables({
          dark: true,
        }),
        ...{
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A',
          'border-radius-base': '2px',
        },
      },
    },
    // scss: {
    //   additionalData: '@import "./src/assets/scss/varible.scss";',
    // },
  },
};
export default cssOption;
