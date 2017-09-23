import {
  playMode
} from 'common/js/config'
import {
  loadSearch
} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mod: playMode.sequence,
  currentIndex: -1,
  rank: {},
  searchHistory: loadSearch()
}

export default state
