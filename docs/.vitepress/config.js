export default {
  lang: 'zh-CN',
  title: 'Hello Tsx',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YJW1314520/vue3-tsx-template' },
    ],
    nav: [
      { text: '安装', link: '/start/item-1' }
    ],
    sidebar: {
      'start': [
        {
          text: '入门',
          items: [
            { text: '为什么使用tsx?', link: '/start/item-1' },
            { text: 'tsx与模板语法的差异', link: '/start/item-2' },
          ]
        },
        {
          text: '其他的',
          items: [
            { text: '预置包', link: '/start/item-3' },
            { text: '项目笔记', link: '/start/item-4' }
          ]
        }
      ]
    },
    lastUpdatedText: 'Updated Date'
  }
}