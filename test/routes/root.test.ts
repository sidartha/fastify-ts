import { test, expect } from 'vitest'
import { build } from '../helper'

test('default root route', async (t) => {
  const app = await build()

  const res = await app.inject({
    url: '/'
  })
  expect(JSON.parse(res.payload)).toStrictEqual({root : true})
})
