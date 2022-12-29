module.exports = {
  getWebmentionsForUrl: (webmentions, url) => {
    let postUrl = url
    const redirects = {
      'https://stephensauceda.com/posts/2022/but-this-one-goes-to-eleventy/':
        'https://stephensauceda.com/archive/but-this-one-goes-to-eleventy/',
      'https://stephensauceda.com/posts/2022/building-a-new-house/':
        'https://stephensauceda.com/archive/building-a-new-house/',
      'https://stephensauceda.com/posts/2021/take-your-shots/':
        'https://stephensauceda.com/archive/take-your-shots/',
      'https://stephensauceda.com/posts/2020/i-am-everything-right-now/':
        'https://stephensauceda.com/archive/i-am-everything-right-now/',
    }

    if (Object.keys(redirects).includes(postUrl)) {
      postUrl = redirects[postUrl]
    }

    return webmentions.children.filter(entry => entry['wm-target'] === postUrl)
  },
  size: mentions => {
    return !mentions ? 0 : mentions.length
  },
  webmentionsByType: (mentions, mentionType) => {
    return mentions.filter(entry => !!entry[mentionType])
  },
  readableDateFromISO: (dateStr, formatStr = "dd LLL yyyy 'at' hh:mma") => {
    return DateTime.fromISO(dateStr).toFormat(formatStr)
  },
}
