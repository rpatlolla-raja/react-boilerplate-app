import { combineEpics } from 'redux-observable'
import routeEpics from './routeEpics'

export default combineEpics(routeEpics)
