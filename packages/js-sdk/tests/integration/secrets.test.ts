import { test, expect } from 'vitest'

import Sandbox, { Secret } from '../../src/index.js'
import { isIntegrationTest } from '../setup.js'

const templateId = 'integration-test-v1'

test.skipIf(!isIntegrationTest)('test secret placeholder', async () => {
  const secret = await Secret.create(
    'my-label',
    'super-secret-pssst-dont-tell-anyone',
    ['*.stripe.com']
  )

  const sandbox = await Sandbox.create(templateId, {
    secrets: {
      ENV_VAR_KEY: secret.id,
    },
    timeoutMs: 60000,
  })

  const result = await sandbox.commands.run('printenv')
  expect(result.stdout).toContain(
    `ENV_VAR_KEY=${secret.mask.prefix}${secret.id}`
  )
})

test.skipIf(!isIntegrationTest)('test deleted secret reference', async () => {
  const secret = await Secret.create(
    'my-label',
    'super-secret-pssst-dont-tell-anyone',
    ['*.stripe.com']
  )

  await Secret.delete(secret.id)

  await expect(
    Sandbox.create(templateId, {
      secrets: {
        ENV_VAR_KEY: secret.id,
      },
    })
  ).rejects.toThrow()
})

test.skipIf(!isIntegrationTest)('test invalid secret reference', async () => {
  await expect(
    Sandbox.create(templateId, {
      secrets: {
        ENV_VAR_KEY: 'this-should-be-a-uuid',
      },
    })
  ).rejects.toThrow()
})
