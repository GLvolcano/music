import * as types from './mutations-types.js'

export const selectPlay = function ({
  commit,
  state
}, {
  item,
  index
}) {
  commit(types.SET_SEQUENCE_LIST, item)
  commit(types.SET_PLAYLIST, item)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING, true)
}
