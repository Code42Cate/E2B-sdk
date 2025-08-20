import { ApiClient, components, handleApiError } from '../api'
import { ConnectionConfig, ConnectionOpts } from '../connectionConfig'

/**
 * Options for request to the Secrets API.
 */
export interface SecretsApiOpts
  extends Partial<
    Pick<
      ConnectionOpts,
      'apiKey' | 'headers' | 'debug' | 'domain' | 'requestTimeoutMs'
    >
  > {}

/**
 * Information about a secret.
 */
export interface Secret {
  /**
   * Identifier of the secret
   */
  id: string

  /**
   * Name of the secret
   */
  name: string

  /**
   * When the secret was created
   */
  createdAt: Date
}

export interface SecretOpts extends ConnectionOpts {
  /**
   * List of hosts where this secret can be used
   */
  hosts?: string[]
}

/**
 * Information about a created secret.
 */
export interface CreatedSecret extends Secret {
  /**
   * Raw value of the secret (only shown on creation)
   */
  value: string

  hosts: string[]
}

export class Secret {
  protected constructor() {}

  /**
   * List all secrets.
   *
   * @param opts connection options.
   *
   * @returns list of secrets.
   */
  static async list(opts?: SecretsApiOpts): Promise<Secret[]> {
    const config = new ConnectionConfig(opts)
    const client = new ApiClient(config)

    const res = await client.api.GET('/secrets', {
      signal: config.getSignal(opts?.requestTimeoutMs),
    })

    const err = handleApiError(res)
    if (err) {
      throw err
    }

    return (
      res.data?.map((secret: components['schemas']['Secret']) => ({
        id: secret.id,
        name: secret.name,
        hosts: secret.hosts,
        createdAt: new Date(secret.createdAt),
      })) ?? []
    )
  }

  /**
   * Create a new secret.
   *
   * @param name name of the secret.
   * @param value value of the secret.
   * @param hosts list of hosts where this secret can be used.
   * @param opts connection options.
   *
   * @returns created secret with value.
   */
  static async create(
    name: string,
    value: string,
    opts?: SecretOpts
  ): Promise<CreatedSecret> {
    const config = new ConnectionConfig(opts)
    const client = new ApiClient(config)

    const res = await client.api.POST('/secrets', {
      body: {
        name: name,
        value: value,
        hosts: opts?.hosts ?? ['*'],
      },
      signal: config.getSignal(opts?.requestTimeoutMs),
    })

    const err = handleApiError(res)
    if (err) {
      throw err
    }

    if (!res.data) {
      throw new Error('Failed to create secret')
    }

    return {
      id: res.data.id,
      name: res.data.name,
      value: res.data.value,
      hosts: res.data.hosts,
      createdAt: new Date(res.data.createdAt),
    }
  }

  /**
   * Delete a secret.
   *
   * @param secretId secret ID.
   * @param opts connection options.
   *
   * @returns `true` if the secret was deleted successfully.
   */
  static async delete(
    secretId: string,
    opts?: SecretsApiOpts
  ): Promise<boolean> {
    const config = new ConnectionConfig(opts)
    const client = new ApiClient(config)

    const res = await client.api.DELETE('/secrets/{secretID}', {
      params: {
        path: {
          secretID: secretId,
        },
      },
      signal: config.getSignal(opts?.requestTimeoutMs),
    })

    if (res.error?.code === 404) {
      return false
    }

    const err = handleApiError(res)
    if (err) {
      throw err
    }

    return true
  }
}
