module.exports = function domain(url) {
  const u = new URL(url)
  return u.hostname
}
