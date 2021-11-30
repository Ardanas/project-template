import styleImport from 'vite-plugin-style-import';

export default function configStyleImport() {
  return styleImport({
    libs: [
      {
        libraryName: 'antd',
        esModule: true,
        resolveComponent: (name) => {
          return `antd/es/${name}/style/index`;
        },
      },
    ],
  });
}
