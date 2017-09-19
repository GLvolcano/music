export function randomUtil(min, max) {
  return Math.floor(Math.random() * max + min)
}
export function disorde(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = randomUtil(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}
