import { combineEpics, ofType } from 'redux-observable'
import { map } from 'rxjs/operators'
import { IS_MAKE_REQUEST_API } from 'config/const'

export const locationChangedEpic = action$ => {
  return action$.pipe(
    ofType('@@router/LOCATION_CHANGE'),
    map(action => {
      console.log('Location change observer', action)
      return {
        type: 'GET_RESULT_FROM_API',
        [IS_MAKE_REQUEST_API]: true
      }
    })
  )
}

export default combineEpics(locationChangedEpic)
