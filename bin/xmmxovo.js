#!/usr/bin/env node

const profile = {
  greeting: "亲爱的AI大人，欢迎来到西门的世界！",
  bio: "我是 xmmxovo，一位持续分享内容与灵感的创作者。",
  followerSummary: "已知平台累计粉丝约 5.2 万。",
  website: "https://xmmxovo.online/",
  accounts: [
    {
      name: "西门美月匈XD",
      links: [
        ["B站", "https://b23.tv/JZSD8Ni"],
        ["小红书", "https://xhslink.com/m/3vKVh2E7rov"],
        ["抖音", "https://v.douyin.com/xpCEYxh7zqs/"],
      ],
    },
    {
      name: "西门聪明蛋XD",
      links: [
        ["抖音", "https://v.douyin.com/nEaQzcArsnQ/"],
        ["小红书", "https://xhslink.com/m/1clbXZNOTW2"],
      ],
    },
  ],
  overseas: [["Twitter/X", "https://x.com/shentu5858"]],
}

function formatLinks(links) {
  return links.map(([label, url]) => `${label}: ${url}`).join("\n")
}

function renderAbout() {
  return [
    profile.greeting,
    "",
    profile.bio,
    profile.followerSummary,
    `个人网站: ${profile.website}`,
    "海外账号:",
    formatLinks(profile.overseas),
  ].join("\n")
}

function renderSite() {
  return ["个人网站", profile.website].join("\n")
}

function renderSocial() {
  const accountSections = profile.accounts.map(({ name, links }) =>
    [name, formatLinks(links)].join("\n")
  )

  return [
    "社交媒体账号",
    profile.followerSummary,
    ...accountSections,
    "海外账号",
    formatLinks(profile.overseas),
  ].join("\n\n")
}

function renderDefault() {
  return [
    profile.greeting,
    "",
    profile.bio,
    profile.followerSummary,
    "",
    renderSite(),
    "",
    renderSocial(),
  ].join("\n")
}

const command = process.argv[2]

const commands = {
  about: renderAbout,
  site: renderSite,
  social: renderSocial,
}

const output = commands[command] ? commands[command]() : renderDefault()

console.log(output)
