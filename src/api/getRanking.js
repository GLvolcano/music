import axios from 'axios'
import {
  commonParams
} from './common.js'

export function getRanking() {
  let url = '/api/ranking'
  const data = Object.assign({}, commonParams, {
    _: +new Date()
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getRankSong(id) {
  let url = '/api/rankSong'
  const data = Object.assign({}, commonParams, {
    needNewCode: 1,
    tpl: 3,
    page: 'detail',
    type: 'top',
    topid: id,
    _: +new Date()
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
