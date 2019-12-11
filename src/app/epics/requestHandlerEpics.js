import { combineEpics } from 'redux-observable'
import { mergeMap, map, filter, catchError } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'
import { IS_MAKE_REQUEST_API } from 'config/const'

export const genericRequestEpic = action$ => {
  return action$.pipe(
    filter(action => action[IS_MAKE_REQUEST_API] === true),
    mergeMap(action => {
      console.log('request action is:', action)
      const { type, promise, requestOptions = {} } = action
      // Make API call using rxjs ajax operator
      // TODO: Remove url and method hard coded items in actual project
      // These are added just for understanding and testing purpose
      return ajax({
        headers: { 'Content-Type': 'application/json' },
        url: 'https://jsonplaceholder.typicode.com/todos',
        method: 'GET',
        ...requestOptions
      }).pipe(
        map(result => {
          const data = result.response
          if (promise) promise.resolve(data)
          return { type: `${type}_SUCCESS`, payload: data }
        }),
        catchError(error => {
          if (promise) promise.reject()
          return { type: `${type}_FAILURE` }
        })
      )
    })
  )
}

export default combineEpics(genericRequestEpic)
