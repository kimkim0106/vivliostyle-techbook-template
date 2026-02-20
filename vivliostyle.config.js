module.exports = {
  title: '本のタイトル',
  author: '著者名 <your-email@example.com>',
  language: 'ja',
  size: 'A5',
  theme: [
    '@vivliostyle/theme-techbook@^2.0.1',
    'themes/prism/theme-vs-light.css',
    'themes/style.css',
  ],
  entry: [
    {
      path: 'index.md',
      rel: 'contents',
    },
    '00.md',
    '01.md',
    '99.md',
    'colophon.md',
  ],
  entryContext: './manuscripts',
  // output: [],
  toc: {
    title: "もくじ"
  },
  // cover: {
  //   src: './images/cover.png',
  //   htmlPath: false,
  // },
}
