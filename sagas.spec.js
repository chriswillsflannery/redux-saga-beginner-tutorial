import test from 'tape'
import { put, call } from 'redux-saga/effects'

import { incrementAsync, delay } from './sagas'

test('incrementAsync sga test', (assert) => {
  const gen = incrementAsync();

  assert.deepEqual(
    gen.next().value,
    call(delay, 1000),
    'incrementAsync saga must call delay(1000)'
  )

  assert.deepEqual(
    gen.next().value,
    put({ type: 'INCREMENT' }),
    'incrementAsync saga must dispatch and INCREMENT action'
  )

  assert.deepEqual(
    gen.next(),
    { done: true, value: undefined },
    'increment Async saga has run its course'
  )

  assert.end()
});

