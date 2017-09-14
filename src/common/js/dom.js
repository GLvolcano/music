export function getData(el, val, opt) {
  const str = 'data-'
  let prex = val
  prex = str + val
  if (opt) {
    return el.setAttribute(prex, opt)
  } else {
    return el.getAttribute(prex)
  }
}
