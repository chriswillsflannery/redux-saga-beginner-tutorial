import { put, takeEvery, all, call } from 'redux-saga/effects'

export const delay = ms => new Promise(res => setTimeout(res, ms))

export function* helloSaga() {
  console.log('Hello Sagas!');
}

// worker saga
export function* incrementAsync() {
  yield call(delay, 1000)
  yield put({ type: 'INCREMENT' })
}

// watcher saga
export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

// entry point watcher saga
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync()
  ])
}