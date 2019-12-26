module.exports = {
  "title": "水瓶座的男人",
  "description": "一个有趣的灵感",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeLine/",
        "icon": "reco-date"
      },
      {
        "text": "联系",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/XueBaoPeng",
            "icon": "reco-github"
          },
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "文章分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    valineConfig: {
      appId: 'eQTVnGKfkuJyO9ReO7d1qXBU-gzGzoHsz',// your appId
      appKey: 'xGJQXzEhR8xhVVhaduyjkTLn', // your appKey
    },
    "logo": "/head.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "薛宝鹏",
    "themePicker": true,
    "record": "京ICP备19032287号-1",
    "startYear": "2018"
  },
  "markdown": {
    "lineNumbers": true
  }
}
