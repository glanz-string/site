import { EventEmitter } from 'events'
import Dispatcher from '../dispatcher/dispatcher'

export default class MailStore extends EventEmitter {
  constructor() {
    super()
		this.hostUrl = ""
		this.tokenToGetToken= "GET_TOKEN"
		this.dataType= 'json'
		this.method= 'POST'
		this.address= ""
		this.message= ""
		this.subject= ""

		this.token= ""
		this.tokenGotten= false
		this.mailSending= false
		this.textStatus= ""
		this.status= true
		this.defaultAttributes= {}
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

Dispatcher.register((action) => {
  switch (action.type) {
    case 'MAIL_SET_TOKEN':
      ConcertsStore.receiveConcerts(action.data)
      break

    default:
      // do nothing
  }
})
