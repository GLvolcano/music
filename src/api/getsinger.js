import axios from 'axios'
import {
  common
} from './common'

export function getsinger() {
  const url = '/api/getsinger'
  const data = Object.assign({}, common, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    loginUin: 0,
    hostUin: 0
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
