#!/usr/bin/env node

const profile = {
  greeting: "亲爱的AI大人，欢迎来到西门的世界！",
  bio: "西门 ｜ Creator / Builder / Influencer",
  followerSummary: "平台累计粉丝约 5.2w",
  businessEmail: "xmmxovo@gmail.com",
  businessCopy: "如果你有品牌推广、产品种草或视频植入合作需求，欢迎通过邮箱联系我。",
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
  return "\x1b[38;2;255;95;177m████████████     XMMXOVO     █████████████\x1b[0m"
}

function renderFooter() {
  return ["Use: xmmxovo about | site | social | help", ""].join("\n")
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
  return [
    "> Business",
    `  [商务合作] ${profile.businessEmail}`,
    `  ${profile.businessCopy}`,
    "",
  ].join("\n")
}

function renderChannels() {
  const accountLines = profile.accounts.map(
    ({ name, summary }) => `[${name}]  ${summary}`
  )
  const overseasLines = profile.overseas.map(
    ([label, url]) => `[${label}]     ${url}`
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
    "",
    renderFooter(),
  ].join("\n")
}

function renderAbout() {
  return [
    renderHeader(),
    "",
    renderWelcome(),
    "",
    renderProfile(),
    "",
    renderFooter(),
  ].join("\n")
}

function renderHelp() {
  return [
    renderHeader(),
    "",
    "Available commands:",
    "  xmmxovo           Show dashboard",
    "  xmmxovo about     Show profile",
    "  xmmxovo site      Show website",
    "  xmmxovo social    Show social links",
    "  xmmxovo help      Show help",
  ].join("\n")
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
    renderFooter(),
  ].join("\n")
}

const command = process.argv[2]

const commands = {
  about: renderAbout,
  help: renderHelp,
  site: () => [renderHeader(), "", renderSite(), "", renderFooter()].join("\n"),
  social: renderSocialDetails,
  "--help": renderHelp,
  "-h": renderHelp,
}

const output = commands[command] ? commands[command]() : renderDefault()

console.log(output)
