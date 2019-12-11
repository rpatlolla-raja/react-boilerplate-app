import { combineEpics } from 'redux-observable'
import routeEpics from './routeEpics'
import requestHandlerEpics from './requestHandlerEpics'

export default combineEpics(routeEpics, requestHandlerEpics)
