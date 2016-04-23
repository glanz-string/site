import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher/dispatcher'

var concerts = []

var ConcertsStore = new class extends EventEmitter {
  constructor() {
    super()
    this._concerts = []
  }
  receiveConcerts(concerts) {
    this._concerts = concerts
    this.emitChange()
  }
  getConcerts() {
    return this._concerts;
  }
  emitChange() {
    this.emit('change')
  }
  onChange(callback) {
    this.on('change', callback)
  }
  off(callback) {
    this.removeListener('change', callback)
  }
}

export default ConcertsStore

Dispatcher.register((action) => {
  switch (action.type) {
    case 'RECEIVE_CONCERTS':
      ConcertsStore.receiveConcerts(action.data)
      break

    default:
      // do nothing
  }
})
