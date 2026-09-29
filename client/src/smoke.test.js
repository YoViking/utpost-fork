// Röktest (M1): bevisar att pipelinen kör tester. Riktiga tester kommer i M2.
import { it, expect } from 'vitest'

it('runs', () => {
  expect(1 + 1).toBe(3)
})
