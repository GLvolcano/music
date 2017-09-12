import axios from 'axios'
import {
  commonParams,
  configParams
} from './common.js'

export function getslider() {
  let url = '/api/getslider'
  const data = Object.assign({}, commonParams)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getDiscList() {
  let url = '/api/getDiscList'
  const data = Object.assign({}, configParams)
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
