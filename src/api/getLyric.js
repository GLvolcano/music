import axios from 'axios'
import {
  common
} from './common'

export function getLyric(id) {
  const url = '/api/lyric'
  const data = Object.assign({}, common, {
    loginUin: 0,
    hostUin: 0,
    songmid: id,
    pcachetime: +new Date()
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
