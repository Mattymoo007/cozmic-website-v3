type IContentfulClientConfig = Assign<
  {
    space: string
    accessToken: string
  },
  Partial<{
    environment: string
    insecure: boolean
    host: string
    basePath: string
    httpAgent: IHTTPAgent
    httpProxyAgent: IHTTPAgent
    proxy: IProxy
    headers: Record<string, string>
    adapter: (config: Record<string, unknown>) => Promise<any>
    resolveLinks: boolean
    removeUnresolved: boolean
    retryOnError: boolean
    logHandler: (
      level: LogLevel,
      data: Assign<{ message: string; name: string }, Record<string, unknown>>
    ) => any
    application: string
    integration: string
    timeout: number // default: 30000
    retryLimit: number // default: 5
  }>
>

interface IContentfulBaseQuery extends IContentfulLinksQuery {
  content_type: string
}
interface IContentfulLinksQuery {
  [key: string]: unknown
  include: number
}

interface IContentfulSearchQuery extends IContentfulBaseQuery {
  select: string
  locale: string
  links_to_entry: string
  links_to_asset: string
  order: string
  limit: number
  skip: number
}

interface IContentfulGetEntriesQuery
  extends IContentfulBaseQuery,
    IContentfulLinksQuery,
    IContentfulSearchQuery {}

interface IContentfulGetAssetQuery {
  mimetype_group: string
}

interface IContentGetAssetsQuery
  extends IContentfulGetAssetQuery,
    IContentfulSearchQuery {}

type IContentfulSyncContentType =
  | ""
  | "Asset"
  | "Entry"
  | "Deletion"
  | "DeletedAsset"
  | "DeletedEntry"

interface IContentfulSyncQuery extends IContentfulBaseQuery {
  initial: boolean
  nextSyncToken: string
  type: IContentfulSyncContentType
}

interface ILocale {
  code: string
  name: string
  default: boolean
  fallbackCode: Maybe<string>
}
