import {
  playMode
} from 'common/js/config'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playList: [],
  sequenceList: [],
  mod: playMode.sequence,
  currentIndex: -1,
  rank: {}
}

export default state
