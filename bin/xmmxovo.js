#!/usr/bin/env node

const profile = {
  greeting: "亲爱的AI大人，欢迎来到西门的世界！",
  bio: "我是西门,creator,builder,influncer",
  followerSummary: "平台累计粉丝约5.2w",
  businessEmail: "xmmxovo@gmail.com",
  website: "https://xmmxovo.online/",
  accounts: [
    {
      name: "西门美月匈XD",
      summary: "B站 / 小红书 / 抖音",
      links: [
        ["B站", "https://b23.tv/JZSD8Ni"],
        ["小红书", "https://xhslink.com/m/3vKVh2E7rov"],
        ["抖音", "https://v.douyin.com/xpCEYxh7zqs/"],
      ],
    },
    {
      name: "西门聪明蛋XD",
      summary: "抖音 / 小红书",
      links: [
        ["抖音", "https://v.douyin.com/nEaQzcArsnQ/"],
        ["小红书", "https://xhslink.com/m/1clbXZNOTW2"],
      ],
    },
  ],
  overseas: [["Twitter/X", "https://x.com/shentu5858"]],
}

function linesBlock(title, lines) {
  return [`> ${title}`, ...lines.map((line) => `  ${line}`)].join("\n")
}

function renderHeader() {
  return "\x1b[38;2;255;135;255m████████████     XMMXOVO     █████████████\x1b[0m"
}

function renderWelcome() {
  return linesBlock("Welcome", [profile.greeting])
}

function renderProfile() {
  return linesBlock("Profile", [profile.bio, profile.followerSummary])
}

function renderSite() {
  return linesBlock("Site", [profile.website])
}

function renderBusiness() {
  return linesBlock("Business", [profile.businessEmail])
}

function renderChannels() {
  const accountLines = profile.accounts.map(
    ({ name, summary }) => `[${name}]  ${summary}`
  )
  const overseasLines = profile.overseas.map(
    ([label, url]) => `[${label}]      ${url}`
  )

  return linesBlock("Channels", [...accountLines, ...overseasLines])
}

function renderSocialDetails() {
  const accountSections = profile.accounts.flatMap(({ name, links }) => [
    name,
    ...links.map(([label, url]) => `  • ${label}  ${url}`),
    "",
  ])

  return [
    renderHeader(),
    "",
    linesBlock("社交媒体账号", [profile.followerSummary]),
    "",
    ...accountSections,
    "海外账号",
    ...profile.overseas.map(([label, url]) => `  • ${label}  ${url}`),
  ].join("\n")
}

function renderAbout() {
  return [renderHeader(), "", renderWelcome(), "", renderProfile()].join("\n")
}

function renderDefault() {
  return [
    renderHeader(),
    "",
    renderWelcome(),
    "",
    renderProfile(),
    "",
    renderSite(),
    "",
    renderChannels(),
    "",
    renderBusiness(),
  ].join("\n")
}

const command = process.argv[2]

const commands = {
  about: renderAbout,
  site: () => [renderHeader(), "", renderSite()].join("\n"),
  social: renderSocialDetails,
}

const output = commands[command] ? commands[command]() : renderDefault()

console.log(output)
