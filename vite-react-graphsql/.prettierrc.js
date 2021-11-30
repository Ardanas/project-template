module.exports = {
  printWidth: 120, // 单行长度
  tabWidth: 2, //缩进长度
  useTabs: false, //使用空格代替tab缩进
  semi: true, //句末使用分号
  singleQuote: true, //使用单引号
  quoteProps: 'as-needed', //仅在必需时为对象的key添加引号
  bracketSpacing: true, //在对象前后添加空格-eg: { foo: bar }
  trailingComma: 'es5',
  '[typescript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[css]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  '[scss]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode',
  },
  overrides: [
    {
      files: '.prettierrc',
      options: { parser: 'json' },
    },
  ],
};
