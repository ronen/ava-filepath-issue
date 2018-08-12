import test from 'ava'

import '../src/dummy'

test('test-name', t => {
  "foo".bar() // throws a TypeError
})
