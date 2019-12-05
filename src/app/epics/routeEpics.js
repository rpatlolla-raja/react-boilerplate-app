import { combineEpics, ofType } from 'redux-observable'
import { map, ignoreElements } from 'rxjs/operators'

export const locationChangedEpic = action$ => {
  return action$.pipe(
    ofType('@@router/LOCATION_CHANGE'),
    map(() => {
      console.log('Location change observer')
    }),
    ignoreElements()
  )
}

export default combineEpics(locationChangedEpic)
