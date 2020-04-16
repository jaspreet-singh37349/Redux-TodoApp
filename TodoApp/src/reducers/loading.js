import {RECEIVE_DATA} from '../actions/action_types'

export default function loading (state = true, action) {
    //console.log("loading")
          switch(action.type) {
            case RECEIVE_DATA :
              return false
            default :
              return state
          }
        }