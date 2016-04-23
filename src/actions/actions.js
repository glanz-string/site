import Dispatcher from '../dispatcher/dispatcher'
import request from 'superagent'

export default {
  receiveConcerts: () => {
    request
      .get('http://glanz.s602.xrea.com/api/')
      .end((err,res) => {
        Dispatcher.dispatch({
          type: 'RECEIVE_CONCERTS',
          data: res.body
        })
      })
  }
}
