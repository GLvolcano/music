import axios from 'axios'
import {
  commonParams
} from './common.js'

export function getHotKey() {
  let url = '/api/hotKey'
  const data = Object.assign({}, commonParams, {
    _: +new Date()
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function search(query, perpage, page, zhida) {
  const url = 'api/search'
  const data = Object.assign({}, commonParams, {
    w: query,
    zhidaqu: 1,
    catZhida: zhida ? 1 : 0,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    perpage: perpage,
    n: perpage,
    p: page,
    remoteplace: 'txt.mqq.all',
    _: +new Date()
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
