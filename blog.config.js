const BLOG = {
  title: '1', // 标题
  author: '2', // 作者
  email: 'psterman@gmail.com', // 邮箱
  link: 'https://nobelium.vercel.app', // 链接或域名
  description: '3', // 描述
  lang: 'en-US', // 语言
  appearance: 'auto', // ['light', 'dark', 'auto'],外观 (浅色, 深色或自动)
  lightBackground: '#ffffff', // 浅色状态下的背景色，请使用十六进制颜色，不要忘记 '#' 号，如 #ffffff
  darkBackground: '#111827', // 深色状态下的背景色，请使用十六进制颜色，不要忘记 '#' 号
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2022, // if leave this empty, current year will be used.
  postsPerPage: 7,
  showAbout: true, // WIP
  showArchive: true, // WIP
  socialLink: 'https://twitter.com/restp', // 社交链接
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS！！！
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk
    provider: '', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: '', // The repository of store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    }
  }
}
// export default BLOG
module.exports = BLOG
