import { test, expect } from 'vitest'

import Sandbox, { Secret } from '../../src/index.js'
import { isIntegrationTest } from '../setup.js'

const templateId = 'e2b-mcp-demo'

test.skipIf(!isIntegrationTest)('test mcp server', async () => {
  const sandbox = await Sandbox.create(templateId, {
    mcp: {
      dockerhub: {
        hubPatToken: "iwontsharethis",
        username: "code42cate"
      },
      duckduckgo: {},
    },
    timeoutMs: 600000,
  })

  const mcpUrl = sandbox.getMcpUrl()
  console.log(mcpUrl)
  // https://8080-iu7ttgsh1broa0wkh797n.e2b.app/mcp

}, 60000000)